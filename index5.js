requests = __import__("requests")

endpoint = "https://mr1-test.cognitiveservices.azure.com/"
//"https://australiaeast.api.cognitive.microsoft.com/vision/v3.1/analyze"

api_key = "4863f1bb43cd4823832abe9bd8bc2b42"

headers = {
    'Ocp-Apim-Subscription-Key': api_key,
    'Content-Type': 'application/json',
}

params = {
    'visualFeatures': 'Categories,Description,Color'
}

image_url = "https://example.com/image.jpg"
data = { 'url': image_url }

response = requests.post(endpoint, headers = headers, params = params, json = data)

if (response.status_code == 404)
    print("Error 404: Not Found. Please check the endpoint URL and API key.")
else
print(response.json())
