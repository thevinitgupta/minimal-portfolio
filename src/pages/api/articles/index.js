
const handleArticles = async () => {
    let markdown = null;
    const api_key = process.env.DEVTO_API_KEY;
    var myHeaders = new Headers();
    myHeaders.append("api-key", api_key);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://dev.to/api/articles/me", requestOptions)
        const result = await response.json();
        const content = filterData(result);
        console.log(content)
        return content;
//             // Use remark to convert Markdown to HTML
//   const processedContent = await remark().use(html).process(result.content);
//             const htmlContent = processedContent.toString();
//             setBlog(htmlContent);
//             setDisplay(true);
    }
    catch (error) { 
        console.log('error', error) 
        return [{}];
    }
};

const filterData = (articles)=>{
    const filtered = [];
    articles.sort((a,b)=> b.page_views_count-a.page_views_count)
    for(let i=0;i<articles.length;i++){
        const article = articles[i];
        let {id, title, description, published_at, slug, url, page_views_count, tag_list, reading_time_minutes} = article;
        published_at = new Date(published_at).toDateString().substring(3);
        filtered.push({id, title, description, published_at, slug, url, page_views_count, tag_list, reading_time_minutes}); 
    }
    return filtered;
}

export default async function handler(req, res) {
    try {
      const result = await handleArticles()
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }