import React, { useEffect, useState } from "react";
import { AppRoot, MultiSelect, Searchbar } from "../component";
import { FlatList, View } from "react-native";
import UserList from "../list/userList";
import lodash from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { cList, loading, uData } from "../redux/selectors/homeSelectors";
import { getUsers, getCategories } from "../redux/actions/homeAction";
const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const userList = useSelector(uData);
  const categories = useSelector(cList);
  const isLoading = useSelector(loading);
  const getUser = () => dispatch(getUsers());
  const getCategorie = () => dispatch(getCategories());
  useEffect(() => {
    getUser();
    getCategorie();
  }, []);

  return (
    <AppRoot>
      <Searchbar onChangeText={() => {}} onPress={() => setShowFilter(true)} />
      <FlatList
        data={userList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        nestedScrollEnabled={true}
        renderItem={({ item, index }) => (
          <View>
            {lodash.intersectionBy(selected, item.categories, "name").length >
              0 || selected.length == 0 ? (
              <UserList
                data={item}
                index={index}
                loading={isLoading}
                onPress={() => {}}
              />
            ) : null}
          </View>
        )}
        keyExtractor={(item) => {
          return item.id;
        }}
      />

      <MultiSelect
        selected={selected}
        visible={showFilter}
        onApply={(selected) => {
          setSelected(selected);
          setShowFilter(false);
        }}
        data={categories}
        onHide={() => setShowFilter(false)}
      />
    </AppRoot>
  );
};

export default Home;
