# import pandas as pd
# from google.colab import files

# # -----------------------------
# # Step 1: Load CSV
# # -----------------------------
# file_path = "finalists.csv"  # Your uploaded file in Colab
# df = pd.read_csv(file_path, dtype=str).fillna("")

# # -----------------------------
# # Step 2: Clean Phone Numbers
# # -----------------------------
# phone_cols = [
#     "Student Phone 1", "Student Phone 2", "Whatsapp No.",
#     "Emergency Contact No.", "Father Mobile No.", "Mother Mobile No.", "Guardian Mobile No."
# ]

# for col in phone_cols:
#     if col in df.columns:
#         df[col] = (
#             df[col].str.replace(r"\D", "", regex=True)   # keep only digits
#             .str.replace(r"^91", "", regex=True)         # remove leading 91
#             .str[-10:]                                   # keep last 10 digits
#             .where(lambda x: x.str.len() == 10, "")      # valid = 10 digits only
#         )

# # -----------------------------
# # Step 3: Clean Aadhaar
# # -----------------------------
# if "Aadhaar Card No." in df.columns:
#     df["Aadhaar Card No."] = (
#         df["Aadhaar Card No."]
#         .str.replace(r"[ \-]", "", regex=True)          # remove spaces & dashes
#         .where(lambda x: x.str.len() == 12, "")         # must be 12 digits
#     )

# # -----------------------------
# # Step 4: Clean Emails
# # -----------------------------
# for col in ["Email", "Email Alternate"]:
#     if col in df.columns:
#         df[col] = df[col].str.strip().str.lower()

# # -----------------------------
# # Step 5: Clean Names
# # -----------------------------
# if "Name as per Document (e.g. Leaving Certificate)" in df.columns:
#     df["Cleaned Name"] = (
#         df["Name as per Document (e.g. Leaving Certificate)"]
#         .str.lower().str.replace(r"\s+", " ", regex=True).str.strip()
#     )
# else:
#     df["Cleaned Name"] = ""

# # -----------------------------
# # Step 6: Duplication Checks
# # -----------------------------
# dup_cols = []

# cond_aadhar = df.duplicated(subset=["Aadhaar Card No.", "Birth Date"], keep=False) & df["Aadhaar Card No."].ne("")
# cond_email  = df.duplicated(subset=["Email", "Birth Date"], keep=False) & df["Email"].ne("")
# cond_phone  = df.duplicated(subset=["Student Phone 1", "Birth Date"], keep=False) & df["Student Phone 1"].ne("")
# cond_name   = df.duplicated(subset=["Cleaned Name", "Birth Date"], keep=False) & df["Cleaned Name"].ne("")
# cond_all    = df.duplicated(
#     subset=["Student Phone 1", "Aadhaar Card No.", "Email", "Cleaned Name", "Birth Date"], keep=False
# ) & df["Student Phone 1"].ne("")

# # -----------------------------
# # Step 7: Build Condition Column
# # -----------------------------
# df["Duplicate Condition"] = ""

# df.loc[cond_aadhar, "Duplicate Condition"] += "Aadhaar + DOB | "
# df.loc[cond_email, "Duplicate Condition"]  += "Email + DOB | "
# df.loc[cond_phone, "Duplicate Condition"]  += "Phone + DOB | "
# df.loc[cond_name, "Duplicate Condition"]   += "Name + DOB | "
# df.loc[cond_all, "Duplicate Condition"]    += "All Fields (Phone Key) | "

# # Remove trailing pipe " | "
# df["Duplicate Condition"] = df["Duplicate Condition"].str.rstrip(" | ")

# # -----------------------------
# # Step 8: Drop helper columns & Export
# # -----------------------------
# df.drop(columns=["Cleaned Name"], inplace=True)

# output_file = "finalists_with_dupes.csv"
# df.to_csv(output_file, index=False)
# print(f"Exported {len(df)} rows to '{output_file}'.")
# files.download(output_file)

import pandas as pd
import re

def find_duplicates(file_path, output_path):
    df = pd.read_csv(file_path, dtype=str).fillna("")

    # Clean phone numbers
    phone_cols = [
        "Student Phone 1", "Student Phone 2", "Whatsapp No.",
        "Emergency Contact No.", "Father Mobile No.", "Mother Mobile No.", "Guardian Mobile No."
    ]
    for col in phone_cols:
        if col in df.columns:
            df[col] = (
                df[col].str.replace(r"\D", "", regex=True)
                .str.replace(r"^91", "", regex=True)
                .str[-10:]
                .where(lambda x: x.str.len() == 10, "")
            )

    # Clean Aadhaar
    if "Aadhaar Card No." in df.columns:
        df["Aadhaar Card No."] = (
            df["Aadhaar Card No."].str.replace(r"[ \-]", "", regex=True)
            .where(lambda x: x.str.len() == 12, "")
        )

    # Clean Emails
    for col in ["Email", "Email Alternate"]:
        if col in df.columns:
            df[col] = df[col].str.strip().str.lower()

    # Clean Names
    if "Name as per Document (e.g. Leaving Certificate)" in df.columns:
        df["Cleaned Name"] = (
            df["Name as per Document (e.g. Leaving Certificate)"]
            .str.lower().str.replace(r"\s+", " ", regex=True).str.strip()
        )
    else:
        df["Cleaned Name"] = ""

    # Duplication checks
    cond_aadhar = df.duplicated(subset=["Aadhaar Card No.", "Birth Date"], keep=False) & df["Aadhaar Card No."].ne("")
    cond_email  = df.duplicated(subset=["Email", "Birth Date"], keep=False) & df["Email"].ne("")
    cond_phone  = df.duplicated(subset=["Student Phone 1", "Birth Date"], keep=False) & df["Student Phone 1"].ne("")
    cond_name   = df.duplicated(subset=["Cleaned Name", "Birth Date"], keep=False) & df["Cleaned Name"].ne("")
    cond_all    = df.duplicated(
        subset=["Student Phone 1", "Aadhaar Card No.", "Email", "Cleaned Name", "Birth Date"], keep=False
    ) & df["Student Phone 1"].ne("")

    # Label duplicates
    df["Duplicate Condition"] = ""
    df.loc[cond_aadhar, "Duplicate Condition"] += "Aadhaar + DOB | "
    df.loc[cond_email, "Duplicate Condition"]  += "Email + DOB | "
    df.loc[cond_phone, "Duplicate Condition"]  += "Phone + DOB | "
    df.loc[cond_name, "Duplicate Condition"]   += "Name + DOB | "
    df.loc[cond_all, "Duplicate Condition"]    += "All Fields (Phone Key) | "
    df["Duplicate Condition"] = df["Duplicate Condition"].str.rstrip(" | ")

    # Drop helper columns and save
    df.drop(columns=["Cleaned Name"], inplace=True)
    df.to_csv(output_path, index=False)

    return output_path
