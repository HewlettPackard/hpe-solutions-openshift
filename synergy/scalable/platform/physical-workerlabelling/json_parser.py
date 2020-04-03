import json

class JSONParser(object):

    def __init__(self, json_file):
        self.json_file = json_file
        self.data = {}

    def parse_dict_or_list(self, key, d):
        """
        This function parses the nested dictionary or list for the required 
        values
        """
        if isinstance(d, list):
            for sub_dict in d:
                if key in sub_dict:
                    return sub_dict[key]
            return None
        else:
            if key in d:
                return d[key]
            else:
                None

    def make_query(self, query_list):
        """
        This function queries the nested dictionary for the required key(s)
        """
        working_level = self.data
        for item in query_list:
            working_level = self.parse_dict_or_list(item, working_level)
            if working_level == None:
                return None
        return working_level

    def load_json(self):
        """
        This function loads the json file
        """
        with open(self.json_file) as data_file:
            self.data = json.load(data_file)
    
    def all_data(self):
        """
        This function returns all the data in the json 
        """
        self.load_json()
        return self.data

    def query(self, query_string):
        """
        This function finds the value of the json key by loading and reading 
        the json file
        """
        self.load_json()
        result = self.make_query(query_string.split('/'))
        return result

    def dict_query(self, query_string):
        """
        This function finds the value of the json key from the dictionary object
        """
        self.data = self.json_file
        result = self.make_query(query_string.split('/'))
        return result

