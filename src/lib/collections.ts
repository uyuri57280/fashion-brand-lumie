const collections = [
  {
    name: "bear",
    collectionUrl: "/collection/bear",
  },
  {
    name: "eyemask",
    collectionUrl: "/collection/eyemask",
  },
  {
    name: "jacket",
    collectionUrl: "/collection/jacket",
  },
  {
    name: "knapsack",
    collectionUrl: "/collection/knapsack",
  },
  {
    name: "mail",
    collectionUrl: "/collection/mail",
  },
  {
    name: "roses",
    collectionUrl: "/collection/roses",
  },
  {
    name: "shoes",
    collectionUrl: "/collection/shoes",
  },
  {
    name: "skirt",
    collectionUrl: "/collection/skirt",
  },
  {
    name: "tote-bag",
    collectionUrl: "/collection/tote-bag",
  },
];

const images: ImageType[] = [
  {
    imageUrl: "/collection/jacket.JPG",
    name: "jacket",
    description: `アイテム説明

【このアイテムは予約商品です】
発送予定時期は、商品の入荷状況により前後する場合がございます。

予定納期:05月中旬

【繊細な透け感が魅力のアイレットカットカーディガン】

【Design/Styling】
・アイレットデザインが涼しげな印象を与えるカーディガン。
・コンパクトなシルエットで女性らしいバランスに仕上げました。
・羽織としてもトップスとしても活躍する万能アイテム。
・ワンピースやデニムスタイルにさらっと羽織るだけでこなれ感を演出します。
・同素材でお作りしたトップス（SWCT262092）とセットアップスタイルも楽しめます。

【Fabric】
・軽やかなカット素材で快適な着心地。
・通気性が良く、季節の変わり目にも最適です。
・カラーはホワイト、グレー、レッドの3色展開です。

透け感:なし
裏地:なし
伸縮性:あり
光沢感:なし
生地の厚さ:普通

【おすすめ骨格タイプ】
■骨格ストレート
■骨格ウェーブ
■骨格ナチュラル`,
  },
  {
    imageUrl: "/collection/bear.JPG",
    name: "bear",
  },
  {
    imageUrl: "/collection/eyemask.JPG",
    name: "eyemask",
  },
  {
    imageUrl: "/collection/knapsack1.JPG",
    name: "knapsack",
  },
  {
    imageUrl: "/collection/knapsack2.JPG",
    name: "knapsack",
  },
  {
    imageUrl: "/collection/mail.JPG",
    name: "mail",
  },
  {
    imageUrl: "/collection/roses.JPG",
    name: "roses",
  },
  {
    imageUrl: "/collection/shoes.JPG",
    name: "shoes",
  },
  {
    imageUrl: "/collection/skirt1.jpg",
    name: "skirt",
  },
  {
    imageUrl: "/collection/skirt2.jpg",
    name: "skirt",
  },
  {
    imageUrl: "/collection/skirt3.jpg",
    name: "skirt",
  },
  {
    imageUrl: "/collection/skirt4.jpg",
    name: "skirt",
  },
  {
    imageUrl: "/collection/tote-bag.jpg",
    name: "tote-bag",
  },
];

// const categories: CategoryType[] = [{}];
// const products: ProductType[] = [{}];

type ImageType = {
  imageUrl: string;
  name: string;
  description?: string;
};
type newCollectionListType = {
  name: string;
  imageUrl: string;
  collectionUrl: string;
};
type newCollectionDetailType = {
  name: string;
  imageUrl: string;
  description: string;
};
type CategoryType = {
  name: string;
  imageUrl: string;
};
type ProductType = {
  name: string;
  imageUrl: string;
  description: string;
};
// {
//     name: "bear",
//     imageUrl: "/collection/jacket.JPG",
//     collectionUrl: "/collection/a",
// },
// collectionsの配列のcollectionUrlとimagesのurlを合わせた配列を返す
const getCollectionList = () => {
  const newCollectionList: newCollectionListType[] = [];
  collections.map((collection) => {
    const newImages = images.find((image) => collection.name === image.name);
    if (newImages) {
      const newCollection: newCollectionListType = {
        name: collection.name,
        imageUrl: newImages?.imageUrl ?? "",
        collectionUrl: collection.collectionUrl,
      };
      newCollectionList.push(newCollection);
    }
  });
  return newCollectionList;
};

export const mergedList = getCollectionList();

// アイテム名を引数にしたリクエストを受け付ける
// 画像urlを返す
// アイテム名で画像を検索して一致するものを配列に入れて返す
export const getCollectionDetail = (itemName: string) => {
  const newCollectionDetail: newCollectionDetailType[] = [];

  // パターンA
  const newImages = images.filter((image) => image.name === itemName);
  if (newImages.length > 0) {
    newImages.map((image) => {
      const newCollection: newCollectionDetailType = {
        name: image.name,
        imageUrl: image.imageUrl,
        description: image.description ?? "",
      };
      newCollectionDetail.push(newCollection);
    });
  }
  return newCollectionDetail;
};
