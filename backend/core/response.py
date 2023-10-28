
import json

def ok_with_body(data: dict):
    return {
        "data": data,
        "statusCode": 200
    }