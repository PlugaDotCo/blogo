/**
 * Action handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {string} event.meta.baseURI - Environment base URI.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json fields.
 *
 * @returns {Promise} Promise object represents the action result.
 */
exports.handle = (plg, event) => plg.axios({
  method: 'post',
  url: `${event.meta.baseURI}/articles`,
  headers: {
    Authorization: `Bearer ${event.auth.access_token}`,
  },
  data: event.input,
}).then(res => res.data).catch((err) => {
  throw new Error(err.response.data);
});
