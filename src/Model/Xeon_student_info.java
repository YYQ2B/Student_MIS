package cn.edu.dlnu.model;

//学生表类Model
public class Xeon_student_info {
	private String stuid; //学号
	private String name; //姓名
	private String sex; //性别
	private String nationid; //民族号
	private String classid;  //班级号6位
	private String grade; 	 //年级
	private String identify; //身份证号码
	private String birth; 	 //出生日期
	private String govface;  //政治面貌
	private String tel;      //手机号码
	private String originid; //生源地号10位
	private String location_countyid;	//县号6位
	private String family; 		//家庭电话
	private String registerstatus; //学籍状态
	private String ifpoor; 		//是否困难
	private String ifcountryloan; //国家贷款
	private String iforigin; 	//	生源地贷款
	private String ifcommerial_insurance;//商业保险
	private String ifmedical_insurance;//医疗保险
	private String dormid;//寝室号

	public String getStuid() {
		return stuid;
	}

	public void setStuid(String stuid) {
		this.stuid = stuid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getNationid() {
		return nationid;
	}

	public void setNationid(String nationid) {
		this.nationid = nationid;
	}

	public String getClassid() {
		return classid;
	}

	public void setClassid(String classid) {
		this.classid = classid;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getIdentify() {
		return identify;
	}

	public void setIdentify(String identify) {
		this.identify = identify;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public String getGovface() {
		return govface;
	}

	public void setGovface(String govface) {
		this.govface = govface;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getOriginid() {
		return originid;
	}

	public void setOriginid(String originid) {
		this.originid = originid;
	}

	public String getLocation_countyid() {
		return location_countyid;
	}

	public void setLocation_countyid(String location_countyid) {
		this.location_countyid = location_countyid;
	}

	public String getFamily() {
		return family;
	}

	public void setFamily(String family) {
		this.family = family;
	}

	public String getRegisterstatus() {
		return registerstatus;
	}

	public void setRegisterstatus(String registerstatus) {
		this.registerstatus = registerstatus;
	}

	public String getIfpoor() {
		return ifpoor;
	}

	public void setIfpoor(String ifpoor) {
		this.ifpoor = ifpoor;
	}

	public String getIfcountryloan() {
		return ifcountryloan;
	}

	public void setIfcountryloan(String ifcountryloan) {
		this.ifcountryloan = ifcountryloan;
	}

	public String getIforigin() {
		return iforigin;
	}

	public void setIforigin(String iforigin) {
		this.iforigin = iforigin;
	}

	public String getIfcommerial_insurance() {
		return ifcommerial_insurance;
	}

	public void setIfcommerial_insurance(String ifcommerial_insurance) {
		this.ifcommerial_insurance = ifcommerial_insurance;
	}

	public String getIfmedical_insurance() {
		return ifmedical_insurance;
	}

	public void setIfmedical_insurance(String ifmedical_insurance) {
		this.ifmedical_insurance = ifmedical_insurance;
	}

	public String getDormid() {
		return dormid;
	}

	public void setDormid(String dormid) {
		this.dormid = dormid;
	}

	public Xeon_student_info(String stuid, String name, String sex,
			String nationid, String classid, String grade, String identify,
			String birth, String govface, String tel, String originid,
			String location_countyid, String family, String registerstatus,
			String ifpoor, String ifcountryloan, String iforigin,
			String ifcommerial_insurance, String ifmedical_insurance,
			String dormid) {
		this.stuid = stuid;
		this.name = name;
		this.sex = sex;
		this.nationid = nationid;
		this.classid = classid;
		this.grade = grade;
		this.identify = identify;
		this.birth = birth;
		this.govface = govface;
		this.tel = tel;
		this.originid = originid;
		this.location_countyid = location_countyid;
		this.family = family;
		this.registerstatus = registerstatus;
		this.ifpoor = ifpoor;
		this.ifcountryloan = ifcountryloan;
		this.iforigin = iforigin;
		this.ifcommerial_insurance = ifcommerial_insurance;
		this.ifmedical_insurance = ifmedical_insurance;
		this.dormid = dormid;

	}
	
	public String toString(){
		return "this is a git test from tom";
	}
}
