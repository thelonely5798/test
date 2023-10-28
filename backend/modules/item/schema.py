from pydantic import BaseModel


class CreateAccountForm(BaseModel):
    username: str 
    password: str
    email: str

class LoginAccountForm(BaseModel):
    username: str 
    password: str
class ChangePasswordForm(BaseModel):
    old_password: str 
    new_password: str