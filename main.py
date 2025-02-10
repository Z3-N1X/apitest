import os
import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/", include_in_schema=False)
@app.head("/")
def read_root():
    return {"message": "API is running on Render!"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  # Use Render's port
    uvicorn.run(app, host="0.0.0.0", port=port)
