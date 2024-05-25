import pandas as pd
import simplejson as json



def excel_to_json(excel_file, json_file):
    excel_data = pd.read_excel(excel_file, sheet_name=None)
    all_data = pd.concat(excel_data.values(), ignore_index=True)

    data_dict = all_data.to_dict(orient='records')

    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(data_dict, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    excel_file_path = 'Aeon Glossary.xlsx'
    json_file_path = 'output.json'

    excel_to_json(excel_file_path, json_file_path)