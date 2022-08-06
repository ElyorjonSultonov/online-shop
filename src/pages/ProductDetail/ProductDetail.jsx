import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useProductsQuery } from "../../services/ProductsApi";

function ProductDetail() {
  const { id } = useParams();
  const { data } = useProductsQuery();
  const chosenProduct = data?.find((product) => product.id === parseInt(id));
  // console.log(id);
  // console.log(data);
  // console.log(chosenProduct);
  const { image, price, title } = chosenProduct;
  return (
    <div className="productDetails">
      <h1 className="choosen">choosen</h1>
      <div className="choosenBody">
        <div className="choosenTiitle">
          <img className="choosenImg" src={image} alt="..." />
          <h1 className="titleH1">{title}</h1>
          <h2 className="price">{price}</h2>
        </div>
        <div className="choosenP">
          <p className="title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            doloribus similique dolor hic sit nulla, modi ea ratione distinctio
            quibusdam nemo nobis provident veritatis quae odit ad sapiente rerum
            harum fugit facere nesciunt blanditiis nisi suscipit repellendus! In
            saepe tenetur vel totam, veniam ipsam soluta repellat? Sint, quam
            voluptatem? Quibusdam, nam a. Quos molestiae dicta, aperiam quidem
            porro quibusdam? Veritatis itaque explicabo quidem, repellendus
            expedita non vel omnis sed, voluptas quod et quasi necessitatibus
            sapiente perferendis laborum magnam amet atque libero. Ad, iusto
            consequatur. Quaerat labore deserunt consequatur. Illo ipsam nihil
            quisquam eius culpa explicabo ipsa aliquam ab, alias impedit sed
            corrupti nesciunt commodi distinctio pariatur placeat quis maxime
            totam deleniti repudiandae quam? Cum laudantium eius dolores ratione
            quaerat laboriosam consequuntur, voluptatibus eaque, aliquid modi
            reiciendis magni, totam culpa alias. Cum unde autem fugit dolor
            aliquid inventore labore, reprehenderit nemo! Ab hic consequatur
            voluptatem distinctio, error molestiae. Odit, rem. Voluptate ut
            dicta eveniet, cum corrupti placeat porro repellendus nemo?
            Doloremque dolorum mollitia velit possimus rerum, quod magni fuga
            esse odio tempore. Minima, accusamus fuga animi velit soluta,
            inventore porro ducimus repellendus fugiat exercitationem
            architecto. Id in mollitia unde harum, pariatur corrupti laborum
            iusto quibusdam at, libero a quia. Enim dicta adipisci quae ratione
            dolores, sint facere error. Atque id culpa quidem, harum nobis sunt
            eveniet exercitationem quia. Sapiente quibusdam id, deserunt tempore
            consectetur tempora nihil culpa architecto doloribus excepturi
            perspiciatis quam sit labore enim eveniet repellendus ipsum
            voluptate aliquid sequi porro quas, aut natus! Aut tempora explicabo
            laboriosam non velit dolore ipsa corporis veritatis, sit, eum
            mollitia enim! Soluta consectetur autem dolores et officia eaque
            quisquam blanditiis pariatur fuga optio recusandae sunt quod quos
            quaerat ab ipsum aut explicabo obcaecati maiores nostrum, odit
            aperiam vero? Animi a itaque dolorum, perspiciatis et vero modi.
            Voluptates quia provident dolor, quaerat sunt iusto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
