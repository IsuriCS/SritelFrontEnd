import React from 'react'
import sendImg from "../../assets/images/send.svg"

export default function StaffChat() {
  return (
      <div
          style={{
              width: "75%",
              height: "90%",
              margin: "auto",
              marginTop: "2%",
              background: "#a4d7f5",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
          }}
      >
          <div
              style={{
                  width: "75%",
                  height: "10%",
                  marginBottom: "2%",
                  background: "#fff",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >
              <input
                  placeholder="Massage"
                  type="text"
                  style={{
                      // marginRight: "10%",
                      marginLeft: "5%",
                      width: "10%",
                      height: "60%",
                      fontSize: "24px",
                  }}
              ></input>
              <img
                  src={sendImg}
                  alt="Send"
                  style={{
                      width: "10%",
                      height: "60%",
                    fontSize: "24px",
                      cursor: "pointer"
                  }}
              />
          </div>
      </div>
  );
}
