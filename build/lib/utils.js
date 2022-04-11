var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export(utils_exports, {
  getBasenameFromFilePathOrUrl: () => getBasenameFromFilePathOrUrl,
  getBufferAndNameFromBase64String: () => getBufferAndNameFromBase64String
});
module.exports = __toCommonJS(utils_exports);
var import_node_path = require("node:path");
var import_node_url = require("node:url");
function getBufferAndNameFromBase64String(base64String, name) {
  const b64match = base64String.match(/^data:([^/]+)\/([^;]+);base64,([a-zA-Z0-9+/]+=*)$/);
  if (!b64match) {
    return null;
  }
  const buffer = Buffer.from(b64match[3], "base64");
  if (!name) {
    name = `${b64match[1].replace(/\W/g, "_")}.${b64match[2].replace(/\W/g, "_")}`;
  }
  return {
    buffer,
    name
  };
}
function getBasenameFromFilePathOrUrl(file) {
  if (file.match(/^\w+:\/\//)) {
    try {
      const url = new import_node_url.URL(file);
      return (0, import_node_path.basename)(url.pathname);
    } catch (err) {
      return (0, import_node_path.basename)(file);
    }
  } else {
    return (0, import_node_path.basename)(file);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBasenameFromFilePathOrUrl,
  getBufferAndNameFromBase64String
});
//# sourceMappingURL=utils.js.map
