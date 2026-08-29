"""Support ticket API routes."""

from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class TicketRequest(BaseModel):
    subject: str
    description: str


@router.post("/")
async def create_ticket(ticket: TicketRequest) -> dict[str, str]:
    return {"status": "created", "subject": ticket.subject}
