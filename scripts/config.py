from dataclasses import dataclass
import os

@dataclass(frozen=True)
class Settings:
    supabase_url: str = os.getenv(
        "SUPABASE_URL",
        "https://fjgfwfnnhebfvuvvjsui.supabase.co"
    )
    supabase_secret_key: str = os.getenv("SUPABASE_SECRET_KEY", "")

settings = Settings()
