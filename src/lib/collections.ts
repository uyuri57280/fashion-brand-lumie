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
]

const images = [
    {
        imageUrl: "/collection/jacket.JPG",
        name: "jacket",
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
        imageUrl: "/collection/Knapsack1.JPG",
        name: "Knapsack",
    },
    {
        imageUrl: "/collection/Knapsack2.JPG",
        name: "Knapsack",
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
]

type newCollectionListType = {
    name: string;
    imageUrl: string;
    collectionUrl: string
};
type newCollectionDetailType = {
    name: string;
    imageUrl: string;
};
// {
//     name: "bear",
//     imageUrl: "/collection/jacket.JPG",
//     collectionUrl: "/collection/a",
// },
// collectionsの配列のcollectionUrlとimagesのurlを合わせた配列を返す
const getCollectionList = () => {
    const newCollectionList: newCollectionListType[] = []
    collections.map((collection) => {
        const newImages = images.find((image) => collection.name === image.name);
        if (newImages) {
            const newCollection: newCollectionListType = {
                name: collection.name,
                imageUrl: newImages?.imageUrl ?? "",
                collectionUrl: collection.collectionUrl,
            };
            newCollectionList.push(newCollection)
        }

    })
    return newCollectionList;
}

export const mergedList = getCollectionList();


// アイテム名を引数にしたリクエストを受け付ける
// 画像urlを返す
// アイテム名で画像を検索して一致するものを配列に入れて返す
export const getCollectionDetail = (itemName: string) => {
    const newCollectionDetail: newCollectionDetailType[] = []

    // パターンA
    const newImages = images.filter((image) => image.name === itemName)
    if (newImages.length > 0) {
        newImages.map((image) => {
            const newCollection: newCollectionDetailType = {
                name: image.name,
                imageUrl: image.imageUrl
            }
            newCollectionDetail.push(newCollection);
        })
    }
    return newCollectionDetail;
}