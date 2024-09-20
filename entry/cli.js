let sleep = ms => new Promise(r => setTimeout(r, ms));
let maindl = document.getElementById("main")
let csl = document.getElementById("console")
let dlinprogress = false
csl.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&lt;................&gt;<br><br><br>"


async function rotanimate(elem){

    let anim = ["⠇", "⠋", "⠉", "⠙", "⠸", "⠴", "⠤", "⠦"]
    let i = 0;
    while (dlinprogress){
        // window.alert(elem.innerHTML)
        elem.innerHTML='<b style="font-size:25px;">[<span style="color:lime">'+anim[i%anim.length]+'</span>]</b>'
        i++
        
        await sleep(250)
    }
    elem.innerHTML='<b style="font-size:25px;">[<span style="color:lime">█</span>]</b>'
    return;
}
async function fileanimate(elem){
    try {
        let updatefiles = [     "@7yW2k9K02/latest/rig/userinterface.html",     "@7yW2k9K02/latest/rig/api.js",     "@7yW2k9K02/latest/rig/main.jsx",     "@7yW2k9K02/latest/rig/config.json",     "@7yW2k9K02/latest/rig/utils.jsm",     "@7yW2k9K02/latest/rig/styles.css",     "@7yW2k9K02/latest/rig/dashboard.html",     "@7yW2k9K02/latest/rig/login.html",     "@7yW2k9K02/latest/rig/logout.php",     "@7yW2k9K02/latest/rig/register.html",     "@7yW2k9K02/latest/rig/api-helpers.js",     "@7yW2k9K02/latest/rig/forms.jsx",     "@7yW2k9K02/latest/rig/reports.html",     "@7yW2k9K02/latest/rig/settings.json",     "@7yW2k9K02/latest/utility/system-scan.exe",     "@7yW2k9K02/latest/utility/disk-cleaner.exec",     "@7yW2k9K02/latest/utility/backup-tool.zip",     "@7yW2k9K02/latest/utility/network-monitor.js",     "@7yW2k9K02/latest/utility/resource-optimizer.tomp",     "@7yW2k9K02/latest/utility/file-compressor.arc",     "@7yW2k9K02/latest/utility/temperature-monitor.js",     "@7yW2k9K02/latest/rig/component-library.js",     "@7yW2k9K02/latest/rig/debug-tools.html",     "@7yW2k9K02/latest/rig/test-suite.js",     "@7yW2k9K02/latest/rig/version-control.json",     "@7yW2k9K02/latest/rig/analytics.js",     "@7yW2k9K02/latest/rig/todo-list.jsx",     "@7yW2k9K02/latest/application/chat.html",     "@7yW2k9K02/latest/utility/file-cleaner.exe",     "@7yW2k9K02/latest/utility/system-optimizer.js",     "@7yW2k9K02/latest/utility/network-speed-test.html",     "@7yW2k9K02/latest/application/error-logs.json",     "@7yW2k9K02/latest/drivers/configuration.xml",     "@7yW2k9K02/latest/drivers/scheduler.js",     "@7yW2k9K02/latest/utility/file-synchronizer.zip",     "@7yW2k9K02/latest/utility/process-monitor.exe",     "@7yW2k9K02/latest/system/notification-center.html",     "@7yW2k9K02/latest/application/media-player.jsx",     "@7yW2k9K02/latest/system/permissions.json",     "@7yW2k9K02/latest/utility/app-launcher.js",     "@7yW2k9K02/latest/application/faq.html",     "@7yW2k9K02/latest/application/sudo.html",     "@7yW2k9K02/latest/application/epoxy-v2.js",     "@7yW2k9K02/latest/system/security.json",     "@7yW2k9K02/latest/system/error-handler.js",     "@7yW2k9K02/latest/utility/file-archiver.zip",     "@7yW2k9K02/latest/system/session-log.xml",     
        "@7yW2k9K02/latest/utility/driver-updater.exec",     "@7yW2k9K02/latest/application/data-import.js",     "@7yW2k9K02/latest/utility/system-analyzer.js",     "@7yW2k9K02/latest/application/activity-logs.html",     "@7yW2k9K02/latest/application/task-manager.html",     "@7yW2k9K02/latest/utility/storage-analyzer.exe",     "@7yW2k9K02/latest/system/update-tool.jsm",     "@7yW2k9K02/latest/application/virtualcom.html",     "@7yW2k9K02/latest/aloa/version-history.json",     "@7yW2k9K02/latest/aloa/data-visualization.js",     "@7yW2k9K02/latest/aloa/profile-settings.html",     "@7yW2k9K02/latest/aloa/application.js",     "@7yW2k9K02/latest/utility/log-analyzer.exec",     "@7yW2k9K02/latest/application/notification-settings.json",     "@7yW2k9K02/latest/application/backup-scheduler.xml",     "@7yW2k9K02/latest/api/api.json",     "@7yW2k9K02/latest/utility/bandwidth-monitor.js",     "@7yW2k9K02/latest/application/user.js",     "@7yW2k9K02/latest/application/external-api.js",     "@7yW2k9K02/latest/rig/syntax.js",     "@7yW2k9K02/latest/rig/code-editor.html",     "@7yW2k9K02/latest/rig/deployment-script.js",     "@7yW2k9K02/latest/application/release-notes.json",     "@7yW2k9K02/latest/application/bug-tracker.html",     "@7yW2k9K02/latest/utility/system-checker.js",     "@7yW2k9K02/latest/application/performance-dashboard.html",     "@7yW2k9K02/latest/rig/security-audit.js",     "@7yW2k9K02/latest/sysdome/third-party-integration.html",     "@7yW2k9K02/latest/application/template-generator.js",     "@7yW2k9K02/latest/application/content-management.html",     "@7yW2k9K02/latest/application/api-testing-tool.js",     "@7yW2k9K02/latest/application/insight-dashboard.html",     "@7yW2k9K02/latest/application/data-migration.js",     "@7yW2k9K02/latest/application/usage-stats.json",     "@7yW2k9K02/latest/utility/commonJS.exec",     "@7yW2k9K02/latest/application/marketplace.html",     "@7yW2k9K02/latest/application/user-management.html",     "@7yW2k9K02/latest/utility/code-linter.js",     "@7yW2k9K02/latest/application/issue-tracker.html",     "@7yW2k9K02/latest/application/data-synchronization.js",     "@7yW2k9K02/latest/application/realtime-collaboration.html",     "@7yW2k9K02/latest/application/api-rate-limiter.js",     "@7yW2k9K02/latest/application/event-logger.html",     
        "@7yW2k9K02/latest/utility/remote-access-tool.js",     "@7yW2k9K02/latest/application/faq-manager.js",     "@7yW2k9K02/latest/application/content-formatter.html",     "@7yW2k9K02/latest/application/invoice-generator.js",     "@7yW2k9K02/latest/application/analytics-dashboard.html",     "@7yW2k9K02/latest/application/scheduling-tool.js",     "@7yW2k9K02/latest/application/api-client.js",     "@7yW2k9K02/latest/rig/web-scraper.js",     "@7yW2k9K02/latest/utility/riggen.html",     "@7yW2k9K02/latest/application/customization-tool.js",     "@7yW2k9K02/latest/application/troubleshooting-guide.html",     "@7yW2k9K02/latest/application/resource-management.html",     "@7yW2k9K02/latest/application/system-requirements.json",     "@7yW2k9K02/latest/application/faq-api.js",     "@7yW2k9K02/latest/application/report-generator.html",     "@7yW2k9K02/latest/application/api-changelog.json",     "@7yW2k9K02/latest/rig/inject.js",     "@7yW2k9K02/latest/rig/xss.exec",     "@7yW2k9K02/latest/rig/memory-leak.sys",     "@7yW2k9K02/latest/rig/cros-kernel-detect.js",     "@7yW2k9K02/latest/rig/payload-injector.jsx",     "@7yW2k9K02/latest/rig/extension-setup.json",     "@7yW2k9K02/latest/rig/manifestv2.cnv",     "@7yW2k9K02/latest/rig/extension.zip",     "@7yW2k9K02/latest/utility/unzipper.exec",     "@7yW2k9K02/latest/utility/threaded-exec.jss",     "@7yW2k9K02/latest/rig/komado.js",     "@7yW2k9K02/latest/rig/churl.js",     "@7yW2k9K02/latest/rig/churlv2.js",     "@7yW2k9K02/latest/rig/classes.js",     "@7yW2k9K02/latest/utility/react-native.json",     "@7yW2k9K02/latest/utility/npm.exec",     "@7yW2k9K02/latest/utility/packages.js",     "@7yW2k9K02/latest/utility/pdl.js",     "@7yW2k9K02/latest/utility/reader.net",     "@7yW2k9K02/latest/rig/cleanup.js",     "@7yW2k9K02/latest/utility/systemsetup.exec", ] 
        let reps = updatefiles.length
        let totaltime=0
        for (let i = 0; i<=reps-1; i++){
            let index = Math.floor(Math.random() * (updatefiles.length))
            elem.innerHTML+= updatefiles[index]+"<br>"
            maindl.scrollTop = maindl.scrollHeight
            updatefiles.splice(index, 1)
            let delay = Math.random()*10
            totaltime = totaltime + Number(delay.toFixed(2))
            await sleep(delay.toFixed(2))
        }
        elem.innerHTML+=`<span style='color:lime'>21 packages, 127 files downloaded and audited in ${totaltime} seconds`
        await sleep(2000)
        dlinprogress=false
    } catch(err){window.alert(err)}
    
}



let main = async function(){
    await sleep(500)
    csl.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style='color:lime'>rigCLI 2.6 ready</span>&gt;<br>"
    csl.innerHTML +=`&nbsp;&nbsp;&nbsp;&nbsp;@curtime [${new Date()}]<br>`
    csl.innerHTML +=`&nbsp;&nbsp;&nbsp;&nbsp;@user [${navigator.userAgent}]<br>`
    let input = document.getElementById('txtinput')
    let running = false
    input.addEventListener('keydown', async function(event){
        if(event.key === "Enter" && !running){
            running = true
            event.preventDefault()
            csl.innerHTML+=`&gt;${input.value}<br>`
            let cmd = input.value.toLowerCase()
            
            input.value=''
            maindl.scrollTop = maindl.scrollHeight;


            if(cmd.startsWith("inj")){
                let spl = cmd.split(' ')
                let flags = {}
                spl.map(a=>{
                    if(a.startsWith("--")){
                        if(a.includes("=")){
                            flags[a.split('--').join('=').split('=')[1]]=a.split('--').join('=').split('=')[2]
                        } else {
                            flags[a.split('--')[1]]=true
                        }
                    }
                })
                let payload = spl[spl.length-1]
                if(payload.startsWith('--')){
                    payload=''
                }
                if(flags.ext && payload){
                    csl.innerHTML+=`<span style="color:yellow">Elevating to [${payload}] contex. Injecting...</span><br>`
                    await sleep(200)
                    csl.innerHTML+=`<span style="color:lime"> █</span>`
                    for (let rep = 0; rep<9; rep++){
                        await sleep(Math.random()*300)
                        csl.innerHTML+=`<span style="color:lime"> █</span>`
                    }
                    
                    csl.innerHTML+=`<br><span style="color:lime">Done!</span><br>`
                    await sleep(200)
                    csl.innerHTML+=`<span style="color:lime">Opening elevated debug window</span><br>`
                    await sleep(200)
                    document.getElementById('extdbg').click()
                } else if(flags.dev){
                    csl.innerHTML+=`<span style="color:yellow">Elevating to [chrome.devtools] contex. Injecting...</span><br>`
                    await sleep(200)
                    csl.innerHTML+=`<span style="color:lime"> █</span>`
                    for (let rep = 0; rep<9; rep++){
                        await sleep(Math.random()*10)
                        csl.innerHTML+=`<span style="color:lime"> █</span>`
                    }
                    csl.innerHTML+=`<br><span style="color:lime">Done!</span><br>`
                    await sleep(100)
                    document.getElementById('devdbg').click()
                } else {
                    if(payload){
                        csl.innerHTML+=`<span style="color:red">ERROR: provide at least one valid flag (--ext, --dev)</span><br>`
                    } else {
                        csl.innerHTML+=`<span style="color:red">ERROR: no payload delivered</span><br>`
                    }
                }
            } else if(cmd.startsWith("pupdate")){
                let spl = cmd.split(' ')
                let flags = {}
                spl.map(a=>{
                    if(a.startsWith("--")){
                        if(a.includes("=")){
                            flags[a.split('--').join('=').split('=')[1]]=a.split('--').join('=').split('=')[2]
                        } else {
                            flags[a.split('--')[1]]=true
                        }
                    }
                })
                let payload = spl[-1]
                csl.innerHTML+=`<span style="color:yellow">fetching payload...</span><br>`
                await sleep(200)
                csl.innerHTML+=`<span style="color:yellow">requesting write permissions...</span><br>`
                await sleep(200)
                document.getElementById('updater').click()
                csl.innerHTML+=`<span style="color:lime">Done!</span><br>`

            } else if(cmd.startsWith("cleanup")){
                let spl = cmd.split(' ')
                let flags = {}
                spl.map(a=>{
                    if(a.startsWith("--")){
                        if(a.includes("=")){
                            flags[a.split('--').join('=').split('=')[1]]=a.split('--').join('=').split('=')[2]
                        } else {
                            flags[a.split('--')[1]]=true
                        }
                    }
                })
                let payload = spl[-1]
                csl.innerHTML+=`<span style="color:yellow">Loading env for cleanup...</span><br>`
                    await sleep(200)
                    document.getElementById('cleanup').click()
                    csl.innerHTML+=`<span style="color:lime">Done!</span><br>`
            } else if(cmd.startsWith("churl")){
                let spl = cmd.split(' ')
                let flags = {}
                spl.map(a=>{
                    if(a.startsWith("--")){
                        if(a.includes("=")){
                            flags[a.split('--').join('=').split('=')[1]]=a.split('--').join('=').split('=')[2]
                        } else {
                            flags[a.split('--')[1]]=true
                        }
                    }
                })
                let payload = spl[-1]
                if (flags.v2){
                    csl.innerHTML+=`<span style="color:yellow">CHURL v2 enviornment loading...</span><br>`
                    await sleep(200)
                    document.getElementById('activate2').click()
                } else {
                    csl.innerHTML+=`<span style="color:yellow">CHURL enviornment loading...</span><br>`
                    await sleep(200)
                    document.getElementById('activate').click()
                }
            } else if(cmd.startsWith("sys")){
                let spl = cmd.split(' ')
                let flags = {}
                spl.map(a=>{
                    if(a.startsWith("--")){
                        if(a.includes("=")){
                            flags[a.split('--').join('=').split('=')[1]]=a.split('--').join('=').split('=')[2]
                        } else {
                            flags[a.split('--')[1]]=true
                        }
                    }
                })
                let payload = spl[spl.length-1]
                if(payload.startsWith('--')){
                    payload=''
                }
                if(flags.update) {
                    csl.innerHTML+=`<span style="color:yellow">Checking server for updates...</span><br>`
                    await sleep(500)
                    csl.innerHTML+=`<span style="color:red">No new updates avalible</span><br>`
                } else if (flags.patch) {
                    csl.innerHTML += `<span style="color:yellow">Establishing connection to host server...</span><br>`
                    await sleep(Math.random()*1000)
                    csl.innerHTML += `<span style="color:yellow">Establishing connection to [wss://api.jswOS/kernel/7yW2k9K02/supdates/latest]...</span><br>`
                    await sleep(Math.random()*1000)
                    csl.innerHTML += `<span style="color:lime">Connections established</span><br>`
                    csl.innerHTML += `<span style="color:yellow">Engaging shimboot (current kernel will be shut off)</span><br>`
                    csl.innerHTML+=`<span style="color:orange"> █</span>`
                    for (let rep = 0; rep<9; rep++){
                        await sleep(Math.random()*2000)
                        csl.innerHTML+=`<span style="color:orange"> █</span>`
                    }
                    csl.innerHTML+=`<br><span style="color:lightgray">shim~$ ready env</span><br>`
                    await sleep(100)
                    csl.innerHTML+=`<span style="color:lightgray">shim~$ echo >> inheriting socket and beginning download</span>`
                    await sleep(100)
                    let fileselem = document.createElement("div")
                    fileselem.style.color="lightgray"
                    fileselem.innerHTML=""
                    csl.appendChild(fileselem)

                    let rot = document.createElement("div")
                    rot.style.color="lightgray"
                    rot.innerHTML="[ ]"
                    csl.appendChild(rot)
                    dlinprogress = true
                    fileanimate(fileselem)
                    await rotanimate(rot)
                    csl.innerHTML+=`<span style="color:lightgray">shim~$ echo >> download complete, booting new kernel</span><br>`
                    
                    await sleep(200)
                    csl.innerHTML+=`<span style="color:lightgray">shim~$ hash checksums --verify </span><br>`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(50)
                    csl.innerHTML+=`<span style="color:lightgray">shim~$ hash >> checksums verified, ready to boot</span><br>`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(200)
                    csl.innerHTML+=`<span style="color:lightgray">shim~$ OS boot kernel@latest</span><br>`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(50)
                    csl.innerHTML+=`<span style="color:lightgray">shim~$ OS >> booting...</span><br>`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(200)
                    csl.innerHTML+=`<span style="color:orange"> █</span>`
                    maindl.scrollTop = maindl.scrollHeight
                    for (let rep = 0; rep<9; rep++){
                        await sleep(Math.random()*2000)
                        csl.innerHTML+=`<span style="color:orange"> █</span>`
                    }
                    csl.innerHTML+=`<br>`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(500)
                    csl.innerHTML+=`<span style="color:lime"> rigCLI 2.6 installed, reboot in</span><br>`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(200)
                    csl.innerHTML+=`[5]`
                    maindl.scrollTop = maindl.scrollHeight
                    await sleep(1000)
                    csl.innerHTML+=`[4]`
                    await sleep(1000)
                    csl.innerHTML+=`[3]`
                    await sleep(1000)
                    csl.innerHTML+=`[2]`
                    await sleep(1000)
                    csl.innerHTML+=`[1]<br>`
                    await sleep(1000)
                    csl.innerHTML+=`<span style="color:lime">EXIT: Exit code 11 (friendly)</span><br>`
                    await sleep(2000)
                    csl.innerHTML += "<br><br><br><br>"
                    maindl.scrollTop = maindl.scrollHeight
                    csl.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style='color:lime'>rigCLI 2.6 ready</span>&gt;<br>"
                    csl.innerHTML +=`&nbsp;&nbsp;&nbsp;&nbsp;@curtime [${new Date()}]<br>`
                    csl.innerHTML +=`&nbsp;&nbsp;&nbsp;&nbsp;@user [${navigator.userAgent}]<br>`
                    maindl.scrollTop = maindl.scrollHeight
                } else {
                    csl.innerHTML += "<span style= 'color:red'>ERROR: no valid flags provided"
                }

            } else if(cmd.startsWith("echo")){
                let line = cmd.split(' ')
                line.shift()
                line = line.filter(a=>!a.startsWith('--'))
                csl.innerHTML+=`<span style="color:#BF40BF">~$ </span>${line.join(' ')}<br>`
            } else {
                console.log('none')
                csl.innerHTML+=`<span style="color:red">ERROR: unknown command &lt;${cmd.split(' ')[0]}&gt;</span><br>`
            }

            running = false
        }
    })
}

main()
