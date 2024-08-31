
import { ImageResponse } from 'next/og';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={"https://koikoi.vercel.app/icon.png"}
          style={{
            borderRadius: 128,
          }}
        />
        <p>Koikoi</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );

}