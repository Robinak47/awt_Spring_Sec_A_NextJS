import axios from "axios";
async function PostPage() {


    const posts = []

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.push(...response.data);

    }
    catch (error) {
        console.error('Error fetching posts:', error);
    }


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PostPage;