import React from 'react'

const WeatherCard = (props) => {
  return (
    <>
    <div className="relative flex flex-col my-4 items-center justify-center overflow-hidden">
          <div
            className="relative flex w-full max-w-72 flex-col items-center overflow-hidden rounded-3xl bg-blue-400 p-6"
            id="widget"
          >
            <div
              className="absolute -bottom-20 z-10 h-[20.5rem] rounded-full bg-blue-500"
              style={{ width: 430 }}
            />
            <div className="z-10 w-full">
              <div className="flex w-full justify-between text-sm text-blue-50">
                <div>{props.time}</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform duration-200 hover:scale-110 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform duration-200 hover:scale-110 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <img
                  src={props.icon}
                  className="tranform my-3 w-32 duration-200 hover:scale-105"
                />
              </div>
              <div className="flex w-full flex-col items-center">
                <h2 className="text-6xl font-bold text-white">
                  {props.temperature}<sup className="text-3xl font-medium">o</sup>
                </h2>
                <p className="text-white mt-1">{props.name}</p>
              </div>
              <div className="mt-4 flex w-full justify-between text-sm text-blue-50">
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="text-xs">Wind Now</p>
                  <p>
                    <span className="text-xl font-bold">{props.wind}</span>km
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="text-xs">Humidity</p>
                  <p>
                    <span className="text-xl font-bold">{props.humidity}</span>%
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-1">
                  <p className="text-xs">Real feel</p>
                  <p>
                    <span className="text-xl font-bold">{props.feel}</span>°
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default WeatherCard