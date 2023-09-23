import React, { useRef, useState, useEffect } from "react";
import Yoga from './Yoga'
const Start = () => {
    const [cameraAvailable, setCameraAvailable] = useState(true);
    const [model, setModel] = useState(null);

    useEffect(() => {
        // Check for camera availability
 // const devices = await navigator.mediaDevices.enumerateDevices();
           // const cameras = devices.filter(device => device.kind === 'videoinput');
               // If we successfully obtained a camera stream, it means a camera is available.
              // Don't forget to stop the stream to release the camera when you're done.
        const checkCameraAvailability = async () => {
          try {
          
           const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
            
            if (!stream) {
              // No cameras found
              setCameraAvailable(false);
            } else {
                setCameraAvailable(true);
                console.log(stream);
              // Camera is available, proceed to import and initialize the model
               const poseDetection = await import("@tensorflow-models/pose-detection");
               setModel(poseDetection)
             // const loadedModel = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
              // setModel(loadedModel);
            }
            stream.getTracks().forEach(track => track.stop());
          } catch (error) {
            console.error('Error checking camera availability:', error);
            setCameraAvailable(false);
          }
        }
    
        checkCameraAvailability();
      }, []);

      const requestCameraPermission = async () => {
        try {
          await navigator.mediaDevices.getUserMedia({ video: true });
          // User granted camera access, reload the component
          window.location.reload();
        } catch (error) {
          console.error('Error requesting camera permission:', error);
        }
      };
      
      if(!cameraAvailable) return (<>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Camera Not Detected</h1>
                    <p className="py-6">
                   It seems like we are not detecting camera in your system please try giving access to the camera and reload the page
                    </p>
                    <button onClick={() => requestCameraPermission()} className="btn btn-primary">Request Camera Access</button>
                </div>
            </div>
        </div>
    </>)
    return (<Yoga poseDetection={model}/>)
      
}
export default Start;