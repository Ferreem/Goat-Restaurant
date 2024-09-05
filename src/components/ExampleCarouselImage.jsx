function ExampleCarouselImage({ text, img }) {
  return (
    <div
      style={{
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(45%)', 
          zIndex: 0,
        }}
      />

      <h3 className="font-bold text-3xl" style={{ position: 'relative', zIndex: 1 }}>{text}</h3>
    </div>
  );
}

export default ExampleCarouselImage;