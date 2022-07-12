import React from "react";
import { FlatList, Text } from "react-native";
import renderer from "react-test-renderer";
import Home from "../index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { act, waitFor } from "@testing-library/react-native";

jest.mock("@react-navigation/native", () => {
  return {
    useFocusEffect: (callback) => callback(),
    useIsFocused: () => true
  };
});

const initialState = {
  categories: { name: "sports", id: "1" },
  id: "1",
  name: "sam",
  profile: "https://picsum.photos/id/1000/224/224"
};

const mockStore = configureStore();
const store = mockStore(initialState);
describe("Home", () => {
  const fakeNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn()
  };
  jest.useFakeTimers();

  it("should render correctly", () => {
    let rendered;
    act(() => {
      rendered = renderer
        .create(
          <Provider store={store}>
            <Home navigation={fakeNavigation} />
          </Provider>
        )
        .toJSON();
    });
    waitFor(() => {
      expect(rendered).toMatchSnapshot();
    });
  });

  jest.mock("@react-native-firebase/database", () => {
    const set = jest.fn();
    return {
      database: jest.fn(() => ({
        ref: jest.fn(() => ({
          once: jest.fn(() => ({
            then: jest.fn(() => ({
              set
            }))
          }))
        }))
      }))
    };
  });

  it("renders the FlatList component", () => {
    const tree = renderer
      .create(
        <FlatList
          data={["apple", "banana", "kiwi"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
