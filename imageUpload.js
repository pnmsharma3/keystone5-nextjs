const { File,Text } = require('@keystonejs/fields');
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
      /*...config */
      path: '/images', // required; public path for image
      src: 'app/public/images', // required; path where the files should be stored
      getFilename: ({ id, originalFilename }) => `${originalFilename}` //keep uploaded image name as it is
   
});

module.exports={
  fields: {
    image: {
      type: File,
      adapter: fileAdapter,
      isRequired: true,
    },
    description: { type: Text },
  }
}
 
