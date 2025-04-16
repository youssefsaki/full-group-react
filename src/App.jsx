import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Community from './components/Community';
import Blog from "./components/Blog";
import Learn from './components/Learn'
import OrderDetails from "./components/OrderDetails";
import { Form } from "./components/Form";
import NotFound from './components/NotFound'
import Blogs from './components/Blogs'
import Recipes from './components/Recipes'
import Coding from './components/Coding'
import Products from "./components/Products";
import ProductDetails from './components/ProductDetails';
import Posts from "./components/Posts";
import PostsDetails from "./components/PostsDetails";

const App = () => {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* Nav Routes */}
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Form />} />

        <Route path="/order-success" element={<OrderDetails />} />

        <Route path="blogs" element={<Blogs />}>
          <Route index element={<Recipes />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="coding" element={<Coding />} />
        </Route>

        <Route path="products" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>

        <Route path="posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App