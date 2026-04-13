import CollectionDetailGallery from "@/components/CollectionDetailGallery"

const collectionPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    return (
        <>
            <CollectionDetailGallery item={id} />
        </>
    )
}
export default collectionPage;