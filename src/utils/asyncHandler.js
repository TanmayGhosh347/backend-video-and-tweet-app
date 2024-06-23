const asyncHandler = (requestHandler) => async ( req , res , next ) =>  {
  Promise.resolve(requestHandler(req , res , next )).catch((err) => next(err))
}


export {asyncHandler};

// const asyncHandler = (func) => { async() =>{}};

/*
const asyncHandler = (func) => async (req , res , next) => {
  try {
    await fn(req , res , next);
  } catch (error) {
    res.status(err.code || 500).json({
      success : false , 
      message : err.message 
    });
  }
};

*/