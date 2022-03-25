import axios from "axios";
import { camelizeKeys } from "humps";
import _ from "lodash";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";

const xhrGet = async function xhrGet(url, options = {}) {
  try {
    const resp = await axios.get(url);
    return camelizeKeys(resp.data);
  } catch (e) {
    if (!e.response) {
      throw e;
    }

    const msg =
      _.get(e, "response.data.message") ||
      _.get(e, "response.data.error") ||
      e.response.statusText;

    e.message = msg;
    throw e;
  }
};

export default { get: xhrGet };
