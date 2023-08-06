export default function handler(request, response){
    let today = new Date();
    response.status(200).json(today)
}