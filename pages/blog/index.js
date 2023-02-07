import React from 'react'

const Blog = () => {
    return (
        <>

        </>
    )
}

export async function getStaticProps(context) {
    return {
        redirect: { destination: "/blog/all" }
    }
}

export default Blog;
