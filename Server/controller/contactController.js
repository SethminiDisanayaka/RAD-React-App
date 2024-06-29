const ContactController ={
   submitContactDetails :  function(req, res, next) {
       const requestBody=req.body;
       console.log(requestBody);
       res.send("Contact details received");
   }
}