function delay(time) {
  return new Promise(function(resolve, reject) {
    if (time > 3000) {
      reject("waktu kelamaan");
    } else {
      resolve(`oke waktu lue ${time}`);
    }
  });
}

const main = async function() {
  try {
    await delay(1000);
    console.log("after 1000ms");

    await delay(2000);
    console.log("after another 2000ms");

    console.log("step 4 (next Job)");
    console.log("setelah delay");

    await delay(5000).catch(function(error) {
      console.log("oh error ya, gpp dah");
    });

    return "selesai";
  } catch (error) {
    console.log("ups ada error", error.message);
  }
};

main().then(function(response) {
  console.log(response);
});
