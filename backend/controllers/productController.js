// Function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestseller,
    } = req.body;
  } catch (error) {}
};

// Function for list product
const listProducts = async (req, res) => {};

// Function for remove product
const removeProduct = async (req, res) => {};

// Function for single product info
const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
