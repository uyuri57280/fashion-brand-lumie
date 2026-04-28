import CollectionDetailGallery from "@/components/CollectionDetailGallery";
import CollectionDetailInfo from "@/components/CollectionDetailInfo";

const collectionPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <>
      <CollectionDetailGallery item={id} />
      <CollectionDetailInfo item={id} />
    </>
  );
};
export default collectionPage;
