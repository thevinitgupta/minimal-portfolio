// https://raw.githubusercontent.com/thevinitgupta/RespondAI/main/README.md


const handleProjects = async () => {
    var myHeaders = new Headers();
myHeaders.append("api-key", "74c5zLCFd5CKPajSSHts9ump");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


    // Step 1: Get the SHA of the existing file
    try {
        const response1 = await fetch("https://raw.githubusercontent.com/thevinitgupta/RespondAI/main/README.md", requestOptions);
        const data1 = await response1.text();
        console.log(data1)

        return data1;
        
        // console.log('Updated File:', updatedData);
    } catch (error) { 
        console.error('Error fetching file:', error);
        return {
            error
        }
    }

};


export default async function handler(req, res) {
    try {
        const result = await (await handleArticles()).json();
        if(result.error) throw Error(result.error);
        res.status(200).send({
            message : "Updated Successfully",
        });
    } catch (err) {
        res.status(500).send({ message: 'Failed to update', error : err.error });
    }
}