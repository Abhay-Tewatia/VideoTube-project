const asyncHandler = (requestHadnler) => {
     return (req, res, next) => {
        Promise
        .resolve(requestHadnler(req, res, next))
        .catch((err)=>next(err))
     }
}


export { asyncHandler }