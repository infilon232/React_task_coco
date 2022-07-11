import axios from "axios";
import { Storage_Key } from "../config/appConstants";
import { PrefManager } from "../utils";

export async function Post(url, payload) {
  let config;
  await PrefManager.getValue(Storage_Key.access_token).then((access_token) => {
    config = {
      headers: {
        Authorization: access_token && JSON.parse(access_token),
        "auth-type": Storage_Key.aut_type
      }
    };
  });
  return new Promise((resolve, reject) => {
    axios
      .post(url, payload, config)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export async function Put(url, payload) {
  let config;
  await PrefManager.getValue(Storage_Key.access_token).then((access_token) => {
    config = {
      headers: {
        Authorization: access_token && JSON.parse(access_token),
        "auth-type": Storage_Key.aut_type
      }
    };
  });
  return new Promise((resolve, reject) => {
    axios
      .put(url, payload, config)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export async function Get(url) {
  let config;
  await PrefManager.getValue(Storage_Key.access_token).then((access_token) => {
    config = {
      headers: {
        Authorization: access_token && JSON.parse(access_token),
        "auth-type": Storage_Key.aut_type
      }
    };
  });

  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export async function Delete(url) {
  let config;
  await PrefManager.getValue(Storage_Key.access_token).then((access_token) => {
    config = {
      headers: {
        Authorization: access_token && JSON.parse(access_token),
        "auth-type": Storage_Key.aut_type
      }
    };
  });
  return new Promise((resolve, reject) => {
    axios
      .delete(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
