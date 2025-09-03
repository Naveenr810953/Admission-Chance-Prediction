# Step 1: Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import joblib
  
# Step 2: Load and explore the dataset
# Load dataset directly from an online source (YBI Foundation GitHub)
admission_data = pd.read_csv('https://github.com/ybifoundation/Dataset/raw/main/Admission%20Chance.csv')

# Clean column names by removing leading/trailing whitespaces   
admission_data.columns = admission_data.columns.str.strip()
print("Cleaned column names:", admission_data.columns.tolist())

# Step 3: Prepare data for modeling
# Define features (X) by removing non-predictive columns such as 'SerialNo' and target column
X = admission_data.drop(['SerialNo', 'ChanceofAdmit'], axis=1)

# Define target variable (y) which we want to predict
y = admission_data['ChanceofAdmit']

# Display which columns are used for prediction and which is the target
print("\nFeatures being used (X columns):", X.columns.tolist())
print("Target variable (y):", y.name)

# Step 4: Split data into training and testing sets
# Use 80% of data for training and 20% for testing, with a fixed random state for reproducibility
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Step 5: Initialize and train the model
# Use Random Forest Regressor - an ensemble method known for robustness and accuracy
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 6: Evaluate model performance
# Measure R² score on both training and testing sets to assess fit
train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)

# Predict on test data and calculate Mean Absolute Error (MAE)
y_pred = model.predict(X_test)
mae = mean_absolute_error(y_test, y_pred)

# Display key performance metrics
print("\nModel Performance Metrics:")
print(f"Training R² Score: {train_score:.4f}")
print(f"Testing R² Score: {test_score:.4f}")
print(f"Mean Absolute Error: {mae:.4f}")

# Step 7: Save the trained model for future use
# Store the model in a .joblib file so it can be reused without retraining
joblib.dump(model, 'admission_chance_predictor.joblib')
print("\nModel saved as 'admission_chance_predictor.joblib'")

# Step 8: Create a sample prediction function
def predict_admission_chance(features):
    """
    Predicts the chance of admission based on applicant features.
    
    Parameters:
    features (dict): Dictionary with keys as feature names and values as input data
    
    Returns:
    float: Predicted chance of admission (range: 0 to 1)
    """
    # Define the correct order of feature columns
    feature_names = ['GREScore', 'TOEFLScore', 'UniversityRating', 
                    'SOP', 'LOR', 'CGPA', 'Research']
    
    # Convert input dictionary to DataFrame in expected format
    input_data = pd.DataFrame([features], columns=feature_names)
    
    # Load the saved model from disk
    loaded_model = joblib.load('admission_chance_predictor.joblib')
    
    # Generate and return the prediction
    prediction = loaded_model.predict(input_data)[0]
    return prediction

# Sample test cases for the prediction function
test_case_1 = {
    'GREScore': 320,
    'TOEFLScore': 110,
    'UniversityRating': 4,
    'SOP': 4.5,
    'LOR': 4.0,
    'CGPA': 8.5,
    'Research': 1
}

test_case_2 = {
    'GREScore': 300,
    'TOEFLScore': 100,
    'UniversityRating': 3,
    'SOP': 3.0,
    'LOR': 3.0,
    'CGPA': 7.5,
    'Research': 0
}

# Print predictions for sample applicants
print("\nSample Predictions:")
print(f"High-profile applicant: {predict_admission_chance(test_case_1):.2%} chance")
print(f"Average applicant: {predict_admission_chance(test_case_2):.2%} chance")
