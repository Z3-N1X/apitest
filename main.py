import os
import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "API is running on Render!"}

if __name__ == "__main__":
    port = int(10000)  # Default to 8000 locally
    uvicorn.run(app, host="0.0.0.0", port=port)
