const BlogQuery = `{
  blogs{
    id
    bannerImage{
      id
      url
      alternativeText
    }
    title
  }
  blogBanner{
    id
    heading{
      id
      title
      description
    }
  }
  blogSection{
    id
    blogHeading{
      id
      title
      description
    }
    browseBlog{
      id
      buttonText
      link
    }
    featuredBlog{
      id
      bannerImage{
        url
      }
      title
    }
    blogs{
      id
      title
      bannerImage{
        id
        url
      }
      
    }
  }
  
  courseBanner{
    heading{
      id
      title
      description
    }
  }
  blogSubscription{
    id
    heading{
      id
      title
      description
    }
    buttonText{
      id
      buttonText
      link
    }
  }
 	blogs{
    id
    bannerImage{
      id
      url
      alternativeText
    }
    title
    blog_author{
      id
      username
      firstname
      lastname
    }
  }
}`;

export default BlogQuery;
