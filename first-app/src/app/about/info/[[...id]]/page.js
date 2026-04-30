
export default async function InfoId({ params }) {

    console.log(await params); // This will log the parameters passed to the page, including the ID
    const { id } = await params; // You can use this ID to fetch specific data or display it on the page
    return (
        <div>
            <h1>Information Page with ID info{id?.join('/')}</h1>
            <p>This page provides additional information about our application based on the ID.</p>
        </div>
    );
}