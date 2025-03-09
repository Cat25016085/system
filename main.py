def extract_functions(code):
    # Extract functions from the code
    functions = []
    for line in code.split('\n'):
        if 'def ' in line:
            functions.append(line)
    return functions