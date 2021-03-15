import withProtect from '../middleware/requirelogin';

 const handler = async(request,response)=>{
    const {scores} = await request.user
    response.status(200).json({score:scores});
}

export default withProtect(handler);
