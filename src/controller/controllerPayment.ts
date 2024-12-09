const { request: Req } = require('express');
const { response: Res } = require('express');
const Omise = require('omise');

const omiseConfig = Omise({
    publicKey:"",
    secretKey:""
})

const currencyType:String = "thb"

const controllerPayment = async (req: typeof Req, res: typeof Res) => {
    const {token, amount} = req.body    
    if(!token){
        try{
            const charge = await omiseConfig.charges.create({
                amount,
                currency: currencyType,
                card: token
            })
            res.status(200).json({ message: "success", charge });
        }catch(err){
            res.status(500).json({ message: err|| 'An error occurred while creating charge'})
        }
    }else{
        res.status(500).json({ message: 'An error occurred while creating charge'})
    }
    
}

export {controllerPayment}