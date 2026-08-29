from app.knowledge.ingestion import ingest_module
from app.knowledge.source_data.Ansys import ANSYS_DATA
from app.knowledge.source_data.Xilinx import XILINX_AMD_DATA
from app.knowledge.source_data.Siemens import SIEMENS_DATA
from app.knowledge.source_data.cadence import CADENCE_DATA
from app.knowledge.source_data.Keysight import KEYSIGHT_DATA

if __name__ == "__main__":
    ingest_module(CADENCE_DATA)
    ingest_module(SIEMENS_DATA)
    ingest_module(ANSYS_DATA)
    ingest_module(KEYSIGHT_DATA)
    ingest_module(XILINX_AMD_DATA)
