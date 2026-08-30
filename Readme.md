For Local Follow this steps:
At FIrst change dir to backend cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload 

next open new terminal change dir to embedding_service
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8001

next change Dir to front end cd frontend
npm install
npm run dev