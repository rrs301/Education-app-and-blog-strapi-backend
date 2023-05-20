module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dknvsbuyy',
        api_key: '117364963376755',
        api_secret: 'xmCRa0mRgRO9CxjtVkRJ0xRhGek',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});