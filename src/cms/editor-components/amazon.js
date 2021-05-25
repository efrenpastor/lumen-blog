import AmazonComponent from '../../components/Amazon/Amazon'

const Amazon = {
  // Internal id of the component
  id: "amazon",
  // Visible label
  label: "Amazon",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: 'name', label: 'Name', widget: 'string' },
    { name: 'image', label: 'Image', widget: 'image' },
    { name: 'price', label: 'Price', widget: 'string' },
    { name: 'url', label: 'Url', widget: 'string' }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{< Amazon name="(.*)" image="(.*)" price="(.*)" url="(.*)" >}}$/,
  // Function to extract data elements from the regexp match
  fromBlock: match =>
    match && {
      name: match[1],
      image: match[2],
      price: match[3],
      url: match[4]
    },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `{{< Amazon name=\"${obj.name}\" image=\"${obj.image}\" price=\"${obj.price}\" url=\"${obj.url}\" >}}`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return <AmazonComponent product={obj} />;
  },
}

export default Amazon;
