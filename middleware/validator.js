const ipvalidator=(req,res,next)=>{
    const ipaddress=req.params.ipaddress
    const ippattern=/^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    if(!ippattern.test(ipaddress)){
        return res.status(400).send("invalid ip address format")
    }
    req.ipaddress=ipaddress
    next();
}
module.exports={ipvalidator}