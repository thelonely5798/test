



def SuccessResponse(data: dict, message: str) -> dict:
    return {
        "status_code": 200,
        "data": data,
        "message": message
    }


def BadRequest(data: dict,message: str) -> dict:
    return {
        "status_code": 400,
        "data": data,
        "message": message
    }
