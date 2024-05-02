function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "button" + shadowSelector + " {background-color: #f5f5f5;border: 1px solid #ccc;border-radius: 3px;color: #333;cursor: pointer;font-size: 1rem;margin: 0 0.5rem;padding: 0.5rem 1rem;}";
  /*LWC compiler v6.6.1*/
}
export default [stylesheet];